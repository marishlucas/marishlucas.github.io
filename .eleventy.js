const markdownIt = require("markdown-it");

const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addFilter("extractYear", function (value) {
    const date = new Date(value);
    return date.getFullYear(); // Returns the year part of the date
  });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("/projects/*.md");
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/assets");
  // eleventyConfig.addPassthroughCopy("src/assets/img");
  // eleventyConfig.addPassthroughCopy("src/assets/js");
  // eleventyConfig.addPassthroughCopy("src/assets/fonts");

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "dist",
    },
  };
};
