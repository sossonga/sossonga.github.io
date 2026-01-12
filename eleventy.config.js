export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy('src/images');

    // Returns work items, sorted by display order
    eleventyConfig.addCollection('plants', (collection) => {
	    return sortByDisplayOrder(collection.getFilteredByGlob('./src/plants/*.md'));
    });

    // Creates and returns a collection of work that is set to be featured
    eleventyConfig.addCollection('featured', (collection) => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/plants/*.md')).filter(
            (x) => x.data.featured,
        );
    });
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
