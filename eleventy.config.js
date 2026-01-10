export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy('src/images');
}

export const config = {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
};
