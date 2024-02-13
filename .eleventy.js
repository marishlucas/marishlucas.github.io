const markdownIt = require("markdown-it");

const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function(eleventyConfig) {
    const md = new markdownIt({
    html: true
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  }); 

    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
};
