module.exports = {
    "roots": ["app"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    },
    "transform": {
        "^.+\\.ts?$": ["<rootDir>/jest.templateUrlToTemplateAndTsJest.js"],
        "^.+\\.html$": "<rootDir>/jest.htmlLoader.js"
    },
};
