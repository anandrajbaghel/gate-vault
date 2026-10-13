/* Test generator - service "generator":
   generate(pool, config, history) -> questions   (throws ReplicationShortfallError when the official mix cannot be filled)
   ALGORITHMS [[id,label]] - computeMastery(rec) - computeTopicWeaknessMap(pool, history, subject)
   QuestionSelector / TestGenerator / ReplicationShortfallError (classes) */
(function (g) {
    'use strict';
    const GSim = g.GateSim;
    GSim.plugins.define('test-generator', {
        onload(p) {
            const L = GSim.pluginLib['test-generator'];
            p.registerService('generator', {
                generate: (pool, config, hm) => L.TestGenerator.generate(pool, config, hm),
                ALGORITHMS: L.QuestionSelector.ALGORITHMS,
                computeMastery: r => L.QuestionSelector.computeMastery(r),
                computeTopicWeaknessMap: (pool, hm, subject) => L.QuestionSelector.computeTopicWeaknessMap(pool, hm, subject),
                QuestionSelector: L.QuestionSelector, TestGenerator: L.TestGenerator, ReplicationShortfallError: L.ReplicationShortfallError
            });
        }
    });
})(window);
