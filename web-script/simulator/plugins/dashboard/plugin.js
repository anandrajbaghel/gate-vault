/* Dashboard - reads the question bank and the history, and shows how you are doing. Read-only: it never changes your data.
   Needs: question-bank, history, test-generator (for topic accuracy). Opened by the exam after you submit. */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared, el = GS.el;
    const svc = n => GSim.services.get(n);
    const pct = v => Math.round(v * 100) + '%';
    const SECTION = { GA: 'Aptitude', EE: 'Core' };

    function bars(rows, emptyText) {
        if (!rows.length) return el('p', { cls: 'gs-dash-empty', text: emptyText || 'Nothing here yet.' });
        const ul = el('ul', { cls: 'gs-bars' });
        rows.forEach(r => {
            const known = r.value !== null && r.value !== undefined;
            const cls = !known ? '' : r.value >= 0.7 ? '' : r.value >= 0.4 ? ' mid' : ' low';
            ul.append(el('li', { cls: 'gs-bar-row' },
                el('span', { cls: 'gs-bar-label', text: r.label }),
                el('span', { cls: 'gs-bar-track', attrs: { role: 'img', 'aria-label': r.label + ' ' + (known ? pct(r.value) : 'not attempted') } }, el('span', { cls: 'gs-bar-fill' + cls, style: 'width:' + (known ? Math.max(2, Math.round(r.value * 100)) : 0) + '%' })),
                el('span', { cls: 'gs-bar-val', text: r.detail || (known ? pct(r.value) : '\u2014') })));
        });
        return ul;
    }
    function box(title, sub, body) { return el('div', { cls: 'gs-dash-box' }, el('h3', { text: title }), sub ? el('p', { cls: 'gn-sub', text: sub }) : null, body); }
    function card(title, value) { return el('div', { cls: 'gate-dash-card' }, el('h4', { text: title }), el('div', { cls: 'val', text: String(value) })); }
    function add(map, key, rec) { const b = map.get(key) || { correct: 0, attempts: 0 }; b.correct += rec.correct || 0; b.attempts += rec.attempts || 0; map.set(key, b); }
    const rowsFrom = (map, order) => [...map.entries()].sort(order || ((a, b) => String(a[0]).localeCompare(String(b[0]), undefined, { numeric: true })))
        .map(([label, b]) => ({ label, value: b.attempts ? b.correct / b.attempts : null, detail: b.attempts ? `${b.correct}/${b.attempts} \u00b7 ${pct(b.correct / b.attempts)}` : 'not attempted' }));

    GSim.plugins.define('dashboard', {
        onload(p) {
            p.addView({
                id: 'dashboard', title: 'Dashboard', order: 20, fill: true,
                mount(box0) {
                    const root = el('div', { cls: 'gate-dashboard-container gs-dash' });
                    box0.append(root);
                    let alive = true, stopLoading = null, seq = 0;

                    async function draw() {
                        const my = ++seq;
                        if (stopLoading) { stopLoading(); stopLoading = null; }
                        const q = svc('questions'), h = svc('history'), gen = svc('generator');
                        if (!q || !h || !gen) { GS.clear(root); root.append(el('p', { cls: 'gn-sub', text: 'The dashboard needs the question bank, history and test generator features.' })); return; }
                        if (q.status !== 'ready') {
                            stopLoading = q.showLoading(root, { title: 'Loading your analytics' });
                            await q.ensure().catch(() => {});
                            if (!alive || my !== seq) return;
                            if (stopLoading) { stopLoading(); stopLoading = null; }
                            if (!q.ready) { q.showError(root, draw); return; }
                        }
                        await h.load();
                        if (!alive || my !== seq) return;
                        render(q, h, gen);
                    }

                    function render(q, h, gen) {
                        GS.clear(root);
                        const data = h.data, pool = q.pool;
                        root.append(el('div', { cls: 'gate-dash-header' }, el('h2', { text: 'GATE Preparation Dashboard' }),
                            el('button', { cls: 'gate-btn', text: '\u27f3 Refresh', attrs: { type: 'button' }, on: { click: () => draw() } })));

                        let attempts = 0, correct = 0, time = 0;
                        for (const r of Object.values(data)) { attempts += r.attempts || 0; correct += r.correct || 0; time += r.totalTimeSec || 0; }
                        if (!attempts) {
                            root.append(el('div', { cls: 'gs-dash-box' }, el('h3', { text: 'No attempts yet' }), el('p', { cls: 'gs-dash-empty', text: 'Take a test and submit it; your analytics will appear here.' }),
                                GSim.slots.views.list().some(v => v.id === 'exam') ? el('button', { cls: 'gate-btn primary', text: 'Go to the test', attrs: { type: 'button' }, on: { click: () => GSim.app.go('exam') } }) : null));
                            return;
                        }

                        let practised = 0, needs = 0, mastered = 0;
                        const bySection = new Map(), byType = new Map(), bySubject = new Map();
                        for (const item of pool) {
                            const r = h.getRecord(item.qid);
                            if (r.attempts > 0) practised++;
                            const m = gen.computeMastery(r);
                            if (m.needsReview) needs++; if (m.isMastered) mastered++;
                            add(bySection, `${SECTION[item.section] || item.section} \u00b7 ${item.marks}M`, r);
                            if (item.type && item.type !== 'UNKNOWN') add(byType, item.type, r);
                            (item.subjects || []).forEach(s => add(bySubject, s, r));
                        }
                        root.append(el('div', { cls: 'gate-dash-summary' },
                            card('Questions attempted', attempts), card('Global accuracy', pct(correct / attempts)),
                            card('Practised', `${practised} / ${pool.length}`), card('Need review', needs), card('Mastered', mastered),
                            card('Avg time / attempt', Math.round(time / attempts) + ' s')));

                        // weakest topics: enough attempts, lowest accuracy first
                        const minA = p.settings.get('minAttempts') || 2, nTop = p.settings.get('weakTopics') || 8;
                        const topicMap = gen.computeTopicWeaknessMap(pool, h, 'ALL');
                        const weak = Object.entries(topicMap).filter(([, i]) => i.attempts >= minA && i.accuracy !== null)
                            .sort((a, b) => a[1].accuracy - b[1].accuracy || b[1].attempts - a[1].attempts).slice(0, nTop)
                            .map(([label, i]) => ({ label, value: i.accuracy, detail: `${i.correct}/${i.attempts} \u00b7 ${pct(i.accuracy)}` }));
                        const untouched = Object.entries(topicMap).filter(([, i]) => i.attempts === 0).length;

                        root.append(el('div', { cls: 'gs-dash-grid' },
                            box('By section and marks', 'Correct answers out of attempts.', bars(rowsFrom(bySection), 'No data.')),
                            box('By question type', null, bars(rowsFrom(byType, (a, b) => String(a[0]).localeCompare(String(b[0]))), 'No answer keys loaded.'))));
                        root.append(el('div', { cls: 'gs-dash-grid' },
                            box('Weakest topics', `Topics with at least ${minA} attempts, lowest accuracy first.` + (untouched ? ` ${untouched} topic${untouched === 1 ? '' : 's'} not attempted yet.` : ''), bars(weak, 'Not enough attempts yet to rank topics.')),
                            box('Subjects', 'From your subject tag files.', bars(rowsFrom(bySubject), 'No subject tag files found.'))));

                        // mistake tags and your own notes
                        const tagTotals = new Map();
                        for (const r of Object.values(data)) for (const [t, n] of Object.entries(r.mistakeTagCounts || {})) tagTotals.set(t, (tagTotals.get(t) || 0) + n);
                        const maxTag = Math.max(1, ...tagTotals.values());
                        const tagRows = [...tagTotals.entries()].sort((a, b) => b[1] - a[1]).map(([label, n]) => ({ label, value: n / maxTag, detail: String(n) }));
                        const notes = Object.entries(data).filter(([, r]) => r.lastMistakeNote)
                            .sort((a, b) => String(b[1].lastMistakeNoteDate || '').localeCompare(String(a[1].lastMistakeNoteDate || ''))).slice(0, 8);
                        const noteList = el('ul', { cls: 'gs-dash-notes' });
                        notes.forEach(([qid, r]) => {
                            const top = Object.entries(r.mistakeTagCounts || {}).sort((a, b) => b[1] - a[1])[0];
                            noteList.append(el('li', {}, el('span', { cls: 'meta', text: qid + (r.lastMistakeNoteDate ? ' \u00b7 ' + new Date(r.lastMistakeNoteDate).toLocaleDateString() : '') }),
                                el('span', { text: r.lastMistakeNote }), top ? el('span', { cls: 'gs-chip', text: top[0] }) : null));
                        });
                        root.append(el('div', { cls: 'gs-dash-grid' },
                            box('Why you lose marks', 'How often each mistake tag was chosen.', bars(tagRows.map(r => Object.assign(r, { value: r.value })), 'No mistake tags yet. They are asked for after you submit a test.')),
                            box('Your latest takeaways', 'One-line notes you wrote after wrong answers.', notes.length ? noteList : el('p', { cls: 'gs-dash-empty', text: 'No notes yet.' }))));
                    }

                    draw().catch(e => { console.error(e); GS.clear(root); root.append(el('p', { cls: 'gn-sub', text: 'The dashboard could not load: ' + ((e && e.message) || e) })); });
                    // refresh when a test is saved elsewhere or the pool reloads
                    const off = GSim.events.on('questions:loaded', () => { if (alive) draw(); });
                    return () => { alive = false; off(); if (stopLoading) stopLoading(); };
                }
            });
        }
    });
})(window);
