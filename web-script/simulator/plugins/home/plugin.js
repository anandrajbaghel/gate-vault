/* Home - a start page listing every feature of the simulator and whether it is running. */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared, el = GS.el;
    GSim.plugins.define('home', {
        onload(p) {
            p.addView({
                id: 'home', title: 'Home', order: 0,
                mount(box) {
                    const list = el('ul', { cls: 'gs-list' });
                    const draw = () => {
                        GS.clear(list);
                        GSim.plugins.list().forEach(f => {
                            const state = f.running ? ['on', 'Running'] : f.error ? ['err', 'Off after an error'] : ['', 'Off'];
                            list.append(el('li', {}, el('span', { text: f.manifest.name }), el('span', { cls: 'gs-state ' + state[0], text: state[1] })));
                        });
                    };
                    draw();
                    box.append(el('div', { cls: 'gn-card' },
                        el('h2', { text: 'GATE Simulator' }),
                        el('p', { cls: 'gn-sub', text: 'Every part of this page is a separate feature. Switch them on or off in Settings \u2192 Core plugins.' }),
                        list,
                        el('p', { cls: 'gn-sub', text: 'The original simulator is still available under Classic.' })));
                    const offs = [GSim.events.on('plugin:enabled', draw), GSim.events.on('plugin:disabled', draw)];
                    return () => offs.forEach(f => f());
                }
            });
        }
    });
})(window);
