// Post Collection

var FilmCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbackbone',
  model: FilmModel
});
