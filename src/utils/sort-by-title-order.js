/**
 * Takes a collection and returns it back in title order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
 module.exports = collection =>
 collection.sort((a, b) =>
   a.data.title.toUpperCase() > b.data.title.toUpperCase() ? 1 : -1
 );
