module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('bundle.css');
  eleventyConfig.addPassthroughCopy('bundle.js');
  eleventyConfig.addPassthroughCopy('logo.svg');
  eleventyConfig.setServerOptions({
    showVersion: true,
    showAllHosts: true,
    enabled: true,
    domdiff: false,
  });
};
