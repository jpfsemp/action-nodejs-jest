// module.exports = {
//     "reporters": [
//         "default",
//         ["jest-junit", {
//             addFileAttribute: "true",
//             ancestorSeparator: " › ",
//             classNameTemplate: "{classname}",
//             titleTemplate: "Teste Github Action", // outputname
//         },
//             ]
//     ]
// };

module.exports = {
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "coverageReporters": ["json", "lcov"],
    "verbose": true,
    "testResultsProcessor": "jest-sonar-reporter"
  }