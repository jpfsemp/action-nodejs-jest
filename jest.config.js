module.exports = {
    "reporters": [
        "default",
        ["jest-junit", {
            addFileAttribute: "true",
            ancestorSeparator: " › ",
            classNameTemplate: "{classname}",
            titleTemplate: "Teste Github Action", // outputname
        }]
    ]
};