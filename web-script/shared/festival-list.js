/* festival-list.js - THE FILE YOU EDIT to add, change or re-date a festival theme.
   Loaded in <head> before first paint (so the page never flashes the wrong colours). Plain data, no logic.

   HOW TO ADD A FESTIVAL: copy the "template" block at the bottom, give it a new unique `id`, fill in the dates
   (`when`) and the colours, save. It appears in Settings -> Festival themes and switches itself on in its time frame.

   DATES (`when`): a list of windows, each { from, to }.
     'YYYY-MM-DD'        one specific year   (use this for festivals whose date moves: Diwali, Holi, Shivratri ...
                         add one window per year)
     'MM-DD'             repeats every year  (New Year, Republic Day ...)
     'YYYY-MM-DDTHH:MM'  / 'MM-DDTHH:MM'     a specific time of day (device local time)
   `to` is optional (one day) and, when it has no time, means "until the end of that day".
   `lead` / `tail` = extra days shown before / after the window. `priority`: higher wins when two overlap.
   `when: []` = never switches on by itself (it can still be previewed).

   COLOURS: dark:true/false, bg (page), bg2 (panels), bg3 (raised), border, text, muted, accent, accentHover, onAccent (text on accent
   buttons), error, success, warning, review, onStatus (text on green/amber chips), shadow ('r,g,b').
   LOOK: accent2 + stripe (colours of the glowing line under the top bar), glow ('r,g,b' of the accent halo), deco (CSS
   background-image layers drawn behind the page).
   MOTION: fx = ambient effect: 'diyas' | 'gulal' | 'stars' | 'fireworks' | 'confetti'; burst = celebration after a test:
   'fireworks' | 'confetti' | 'gulal' | 'sparkle'; fxColors = particle colours. css = any extra CSS; `&` stands for
   :root[data-theme="<id>"].

   Moving-date festivals below were checked against published panchang calendars (Diwali 2026 on 8 Nov; Maha Shivratri
   2027 on 6 Mar - one calendar says 5 Mar, so both days are covered; Holi 2027 on 22 Mar, Holika Dahan 21 Mar).
   Add the following years' dates here when they are published. */
window.GATE_FESTIVAL_LIST = [
    {
        id: 'diwali', name: 'Diwali', emoji: '\uD83E\uDE94', desc: 'Lamps, gold and fireworks',
        greeting: 'Happy Diwali! May your preparation shine as bright as the lamps.',
        when: [{ from: '2026-11-06', to: '2026-11-10' }],         // Dhanteras to Bhai Dooj; add 2027, 2028 ... later
        lead: 2, tail: 1, priority: 60,
        colors: { dark: true, bg: '#1b0c06', bg2: '#2a130a', bg3: '#371a0e', border: '#6b3216', text: '#fff1dc', muted: '#dcb58c', accent: '#ffb52e', accentHover: '#ffc95c', onAccent: '#2a1200', error: '#ff8a7a', success: '#9be37a', warning: '#ffd36b', review: '#ff9a6b', onStatus: '#2a1200', shadow: '30,10,0' },
        accent2: '#ff6d1f', stripe: ['#ff6d1f', '#ffb52e', '#ffe08a', '#ffb52e', '#ff6d1f'], glow: '255,181,46',
        deco: 'radial-gradient(900px 500px at 8% -5%, rgba(255,160,40,.20), transparent 60%), radial-gradient(800px 500px at 100% 105%, rgba(255,90,30,.16), transparent 60%)',
        preview: { bg: '#1b0c06', bg2: '#2a130a', tx: '#fff1dc', ac: '#ffb52e', bd: '#6b3216' },
        fx: 'diyas', burst: 'fireworks', fxColors: ['#ffb52e', '#ff6d1f', '#ffe08a', '#fff1dc']
    },
    {
        id: 'holi', name: 'Holi', emoji: '\uD83C\uDFA8', desc: 'Festival of colours',
        greeting: 'Happy Holi! Splash some colour on a long study day.',
        when: [{ from: '2027-03-21', to: '2027-03-22' }],         // Holika Dahan and Holi
        lead: 3, tail: 1, priority: 55,
        colors: { dark: false, bg: '#fffaf3', bg2: '#fff0f6', bg3: '#ffe4f0', border: '#f1bdd6', text: '#2b1840', muted: '#7a5a8e', accent: '#d81f8f', accentHover: '#b9157a', onAccent: '#ffffff', error: '#d7263d', success: '#12945f', warning: '#e08a00', review: '#7b3fe4', onStatus: '#ffffff', shadow: '120,40,90' },
        accent2: '#7b3fe4', stripe: ['#ff3d9a', '#ffb400', '#21c17a', '#1bb5e0', '#7b3fe4'], glow: '216,31,143',
        deco: 'radial-gradient(520px 360px at 0% 0%, rgba(255,61,154,.20), transparent 65%), radial-gradient(520px 360px at 100% 0%, rgba(255,180,0,.22), transparent 65%), radial-gradient(520px 380px at 0% 100%, rgba(27,181,224,.20), transparent 65%), radial-gradient(520px 380px at 100% 100%, rgba(33,193,122,.20), transparent 65%)',
        preview: { bg: '#fffaf3', bg2: '#fff0f6', tx: '#2b1840', ac: '#d81f8f', bd: '#f1bdd6' },
        fx: 'gulal', burst: 'gulal', fxColors: ['#ff3d9a', '#ffb400', '#21c17a', '#1bb5e0', '#7b3fe4', '#ff6a3d']
    },
    {
        id: 'shivratri', name: 'Maha Shivratri', emoji: '\uD83D\uDD31', desc: 'Deep indigo night, calm stars',
        greeting: 'Om Namah Shivaya. Stay steady, stay focused.',
        when: [{ from: '2027-03-05', to: '2027-03-06' }],         // calendars differ by a day, so both are covered
        lead: 2, tail: 1, priority: 55,
        colors: { dark: true, bg: '#070b1d', bg2: '#0d1330', bg3: '#141b42', border: '#2b3573', text: '#e9edff', muted: '#9ba8dd', accent: '#9fd2ff', accentHover: '#c3e3ff', onAccent: '#06122b', error: '#ff9aa8', success: '#7fe0bf', warning: '#ffd98a', review: '#c2b0ff', onStatus: '#06122b', shadow: '0,4,20' },
        accent2: '#6f8cff', stripe: ['#2b3573', '#9fd2ff', '#e9edff', '#9fd2ff', '#2b3573'], glow: '159,210,255',
        deco: 'radial-gradient(700px 420px at 92% -6%, rgba(159,210,255,.16), transparent 62%), radial-gradient(900px 600px at 0% 110%, rgba(111,140,255,.12), transparent 62%)',
        preview: { bg: '#070b1d', bg2: '#0d1330', tx: '#e9edff', ac: '#9fd2ff', bd: '#2b3573' },
        fx: 'stars', burst: 'sparkle', fxColors: ['#e9edff', '#9fd2ff', '#c2b0ff']
    },
    {
        id: 'newyear', name: 'New Year', emoji: '\uD83C\uDF86', desc: 'Midnight, gold and fireworks',
        greeting: 'Happy New Year! A new year, a new rank.',
        when: [{ from: '12-30', to: '01-02' }],                   // every year
        lead: 0, tail: 0, priority: 60,
        colors: { dark: true, bg: '#05060f', bg2: '#0c0e24', bg3: '#13163a', border: '#2d3166', text: '#f5f6ff', muted: '#a3a9d9', accent: '#ffd54a', accentHover: '#ffe27d', onAccent: '#1a1400', error: '#ff8fa3', success: '#72e5b0', warning: '#ffd54a', review: '#c79bff', onStatus: '#1a1400', shadow: '0,0,16' },
        accent2: '#ff4fa3', stripe: ['#ff4fa3', '#ffd54a', '#4fd3ff', '#ffd54a', '#ff4fa3'], glow: '255,213,74',
        deco: 'radial-gradient(800px 500px at 50% -10%, rgba(255,213,74,.14), transparent 60%), radial-gradient(700px 500px at 100% 100%, rgba(255,79,163,.12), transparent 62%)',
        preview: { bg: '#05060f', bg2: '#0c0e24', tx: '#f5f6ff', ac: '#ffd54a', bd: '#2d3166' },
        fx: 'fireworks', burst: 'fireworks', fxColors: ['#ffd54a', '#ff4fa3', '#4fd3ff', '#ffffff', '#9bff7a']
    },
    {
        id: 'tricolour', name: 'Tricolour', emoji: '\uD83C\uDDEE\uD83C\uDDF3', desc: 'Republic Day and Independence Day',
        greeting: 'Jai Hind! Wishing you a proud and focused day.',
        when: [{ from: '01-26' }, { from: '08-15' }],             // every year
        lead: 2, tail: 0, priority: 50,
        colors: { dark: false, bg: '#fffdf8', bg2: '#f3f8f1', bg3: '#e8f3e4', border: '#c9dcc2', text: '#14233a', muted: '#566a80', accent: '#1d3f94', accentHover: '#162f72', onAccent: '#ffffff', error: '#c62839', success: '#138808', warning: '#c8610f', review: '#5b3fc4', onStatus: '#ffffff', shadow: '20,40,20' },
        accent2: '#e8731a', stripe: ['#ff9933', '#ff9933', '#f2f2f2', '#138808', '#138808'], glow: '29,63,148',
        deco: 'linear-gradient(180deg, rgba(255,153,51,.16), transparent 220px), linear-gradient(0deg, rgba(19,136,8,.14), transparent 220px)',
        preview: { bg: '#fffdf8', bg2: '#f3f8f1', tx: '#14233a', ac: '#ff9933', bd: '#138808' },
        fx: 'confetti', burst: 'confetti', fxColors: ['#ff9933', '#1d3f94', '#138808', '#ffbf80']
    },
    {
        id: 'support', name: 'Support Month', emoji: '\uD83D\uDC9B', desc: 'A warm campaign look',
        greeting: 'It\u2019s Support Month! If this project helped your preparation, please consider supporting it.',
        link: { text: 'Support the project', url: '' },           // put your link in url (leave '' to hide the link)
        when: [],                                                  // add the month, e.g. { from: '2026-12-01', to: '2026-12-31' }
        lead: 0, tail: 0, priority: 40,
        colors: { dark: false, bg: '#f7fcfb', bg2: '#e9f7f4', bg3: '#d9f0eb', border: '#b7ded6', text: '#10302c', muted: '#4f7771', accent: '#e4572e', accentHover: '#c94621', onAccent: '#ffffff', error: '#c62839', success: '#12805c', warning: '#b86f00', review: '#6a4bd8', onStatus: '#ffffff', shadow: '10,70,60' },
        accent2: '#0fa3a3', stripe: ['#0fa3a3', '#e4572e', '#ffb703', '#e4572e', '#0fa3a3'], glow: '228,87,46',
        deco: 'radial-gradient(600px 380px at 0% 0%, rgba(15,163,163,.16), transparent 65%), radial-gradient(600px 380px at 100% 100%, rgba(228,87,46,.14), transparent 65%)',
        preview: { bg: '#f7fcfb', bg2: '#e9f7f4', tx: '#10302c', ac: '#e4572e', bd: '#b7ded6' },
        fx: 'confetti', burst: 'confetti', fxColors: ['#e4572e', '#0fa3a3', '#ffb703', '#6a4bd8']
    }

    /* ---- template: copy, rename `id`, fill in ----
    ,{
        id: 'my-festival', name: 'My Festival', emoji: '\u2728', desc: 'One line shown in Settings',
        greeting: 'Message shown in the small banner.',
        when: [{ from: '2027-05-01', to: '2027-05-03' }], lead: 1, tail: 1, priority: 50,
        colors: { dark: true, bg: '#101018', bg2: '#181826', bg3: '#20203a', border: '#383860', text: '#f0f0ff', muted: '#a0a0c8', accent: '#ffcc00', accentHover: '#ffdd55', onAccent: '#201800', error: '#ff8a9a', success: '#7fe0a8', warning: '#ffcc00', review: '#c0a0ff', onStatus: '#201800', shadow: '0,0,10' },
        accent2: '#ff66aa', stripe: ['#ff66aa', '#ffcc00', '#66ccff'], glow: '255,204,0',
        deco: 'radial-gradient(800px 500px at 50% -10%, rgba(255,204,0,.14), transparent 60%)',
        preview: { bg: '#101018', bg2: '#181826', tx: '#f0f0ff', ac: '#ffcc00', bd: '#383860' },
        fx: 'confetti', burst: 'confetti', fxColors: ['#ffcc00', '#ff66aa', '#66ccff']
    }
    */
];
