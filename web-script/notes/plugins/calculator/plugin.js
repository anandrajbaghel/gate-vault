/* Calculator (notes reader) - thin wrapper around GateShared.calculator: a top-bar button, a command with a hotkey and the options.
   The calculator itself lives in web-script/shared/calculator.js, so both pages behave the same. Nothing else depends on it. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared;
    GN.plugins.define('calculator', {
        onload(p) {
            const calc = GS.calculator.create({ angle: p.settings.get('angle'), autoClose: !!p.settings.get('autoClose') });
            p.addDisposer(() => calc.destroy());
            let removeBtn = null, removeCmd = null;
            const bindButton = () => {
                if (removeBtn) { removeBtn(); removeBtn = null; }
                if (p.settings.get('showButton') !== false) removeBtn = p.addTopbarButton({ id: 'calculator', icon: 'calculator', title: 'Calculator', order: 70, onClick: () => calc.toggle() });
            };
            const bindCommand = () => {
                if (removeCmd) { removeCmd(); removeCmd = null; }
                const hk = String(p.settings.get('hotkey') || '').trim();
                removeCmd = p.addCommand({ id: 'calculator:toggle', name: 'Toggle calculator', hotkeys: hk ? [hk] : [], run: () => calc.toggle() });
            };
            bindButton(); bindCommand();
            p.settings.on(k => {
                if (k === 'angle') calc.setAngleMode(p.settings.get('angle'));
                else if (k === 'autoClose') calc.setAutoClose(!!p.settings.get('autoClose'));
                else if (k === 'showButton') bindButton();
                else if (k === 'hotkey') bindCommand();
            });
        }
    });
})(window);
