/* Grader - service "grader":  grade(userAnswer, keyObject) -> { status, marksAwarded } */
(function (g) {
    'use strict';
    const GSim = g.GateSim;
    GSim.plugins.define('grader', {
        onload(p) {
            const G = GSim.pluginLib['grader'].GateGrader;
            p.registerService('grader', { grade: (a, k) => G.grade(a, k) });
        }
    });
})(window);
