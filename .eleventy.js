module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./_src/assets/img");
    eleventyConfig.addPassthroughCopy("./_src/assets/fonts");
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
