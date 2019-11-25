const tsJest = require('ts-jest');
module.exports = {
    process(src, ...rest) {
        // This will turn templateUrl to template (which works in jest)
        const transformedContent = src.replace('templateUrl:', 'template:');

        // Now pass the transformed files to ts-jest
        return tsJest.process(transformedContent, ...rest);
    },
};