import rssPlugin from '@11ty/eleventy-plugin-rss';

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addPassthroughCopy('src/js');

	// Returns artwork items, sorted by display order
	eleventyConfig.addCollection('artwork', (collection) => {
		return [...collection.getFilteredByGlob('./src/artwork/*.md')].reverse();
	});

	// Creates and returns a collection of artwork that is set to be featured
	eleventyConfig.addCollection('featuredArtwork', (collection) => {
		return sortByDisplayOrder(collection.getFilteredByGlob('./src/artwork/*.md')).filter(
			(x) => x.data.featured,
		);
	});

	// Returns a collection of blog posts in reverse date order
	eleventyConfig.addCollection('gardeningPosts', (collection) => {
		return [...collection.getFilteredByGlob('./src/gardening/*.md')].reverse();
	});

	// Plugins
	eleventyConfig.addPlugin(rssPlugin);
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};

/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
function sortByDisplayOrder(collection) {
	return collection.sort((a, b) =>
		Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
	);
}
