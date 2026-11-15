// Eleventy turns the Markdown files in src/ into the finished website in _site/.
export default function (eleventyConfig) {
  // Copy images, CSS and JS straight through to the site.
  eleventyConfig.addPassthroughCopy("src/assets");

  // 15 November 2026
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );

  // 2026-11-15 (for <time datetime="">)
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  // Newest first, optionally limited: {{ posts | newest(3) }}
  eleventyConfig.addFilter("newest", (posts = [], limit) => {
    const sorted = [...posts].sort((a, b) => b.date - a.date);
    return limit ? sorted.slice(0, limit) : sorted;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
