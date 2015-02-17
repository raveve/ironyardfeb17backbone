// Model View

var FilmView = Backbone.View.extend({
  template: _.template($('#filmTmpl').html()),
  tagName: 'article',
  initialize: function () {
  },

  events: {
    "click .delete-film": "removeFilm"
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },

  removeFilm: function () {
    this.$el.remove();
    this.model.destroy();
  }
});

// Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllFilms();
  },

  events: {
    "submit #create-film": "createFilm"
  },

  createFilm: function (event) {
    event.preventDefault();
    var newFilm = {
      title: $('#create-film').find('input[name="newTitle"]').val(),
      image: $('#create-film').find('input[name="newImage"]').val(),
      synopsis: $('#create-film').find('textarea[name="newSynopsis"]').val(),
      date: $('#create-film').find('input[name="newDate"]').val()
    };

    var newModelFilm = new FilmModel(newFilm);
    newModelFilm.save();
    console.log(this.collection.length);
    this.collection.add(newModelFilm);
    console.log(this.collection.length);
    // this.addOneFilm(newModelFilm); // alternative method
    this.addAllFilms();
    console.log();
    this.$el.find('#create-film').find('input, textarea').val('');
  },

  addOneFilm: function (film) {
    var filmView = new FilmView({model: film});
    this.$el.append(filmView.render().el);
  },

  addAllFilms: function () {
    _.each(this.collection.models, this.addOneFilm, this)
  }
});
