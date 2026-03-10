import rssPlugin from '@11ty/eleventy-plugin-rss';

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('./src/css');

    // Plugins
    eleventyConfig.addPlugin(rssPlugin);

    // Returns artworks, sorted by reverse date
    eleventyConfig.addCollection('artworks', (collection) => {
	    return [...collection.getFilteredByGlob('./src/artworks/*.md')].reverse();
    });

}

export const config = {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
};
