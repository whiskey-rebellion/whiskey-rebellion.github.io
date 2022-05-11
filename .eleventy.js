const sortByTitleOrder = require('./src/utils/sort-by-title-order.js');

module.exports = config => {

  // Set directories to pass through to the docs folder
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/images/');

  // Returns work items, sorted by title order
  config.addCollection('dances', collection => {
    return sortByTitleOrder(collection.getFilteredByGlob('./src/dances/*.md'));
  });

  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: "docs"
    }
  }

};