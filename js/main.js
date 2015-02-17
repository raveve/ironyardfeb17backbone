$(document).ready(function () {

  var filmCollection = new FilmCollection();

  filmCollection.fetch().then(function () {
  var appView = new AppView({collection: filmCollection});
});

});
