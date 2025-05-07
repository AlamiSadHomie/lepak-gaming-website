module.exports = function(eleventyConfig) {
  // Copy the `assets` directory to the output
  eleventyConfig.addPassthroughCopy("src/assets/images");
  
  // Custom date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Rating stars filter
  eleventyConfig.addFilter("stars", function(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (halfStar) stars += '½';
    return stars;
  });

  return {
    dir: {
      input: "src",
      output: "https://joyful-rabanadas-e4f399.netlify.app/",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
