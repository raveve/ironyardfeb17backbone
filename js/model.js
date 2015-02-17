// Post Model

var FilmModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbackbone',
  idAttribute: "_id",
  defaults: function () {
    return {
      title: "Back to the Future",
      image: "http://2.bp.blogspot.com/-ilRF_E1g9d0/UNH4WkJPrxI/AAAAAAAAAZM/wdha7-dFYss/s1600/back_final-01.png",
      synopsis: "A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
      date: "July 3, 1985"
    };
  },
  initialize: function () {
    console.log("FilmModel instance was created");
  }
});

//
// var film1 = new FilmModel({title: "Chef", image: "http://www.movieposter.com/posters/archive/main/188/MPW-94080", synopsis: "A chef who loses his restaurant job starts up a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.", date: "May 8, 2014"});
//
// var film2 = new FilmModel ({title: "The Secret Life of Walter Mitty", image: "https://langleyfilmbox.files.wordpress.com/2014/08/walter-mitty-poster.jpg", synopsis: "When his job along with that of his co-worker are threatened, Walter takes action in the real world embarking on a global journey that turns into an adventure more extraordinary than anything he could have ever imagined.", date: "December 25, 2013"});
//
// var film3 = new FilmModel ({title: "The Hundred-Foot Journey", image: "http://imageserver.moviepilot.com/the-hundred-foot-journey-new-trailer-poster-and-stills.jpeg?width=750&height=1111", synopsis: "The Kadam family leaves India for France where they open a restaurant directly across the road from Madame Mallory's Michelin-starred eatery.", date: "August, 8 2014"});
//
// var film4 = new FilmModel ({title: "The Internship", image: "http://cdn.collider.com/wp-content/uploads/The-Internship-movie-poster.jpg",  synopsis: "Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google, where they must compete with a group of young, tech-savvy geniuses for a shot at employment.", date: "June 7, 2013"});
//
//
