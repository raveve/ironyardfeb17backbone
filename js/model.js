var MovieModel = Backbone.Model.extend({
  defaults: {
    title: "Default Title",
    synopsis: "Default Synopsis",
    image: "Image URL"
  },
  initialize: function () {
    console.log("MovieModel instance was created.");
  }
});


var movie1 = new MovieModel({title: "Chef", synopsis: "A chef who loses his restaurant job starts up a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.", image: "http://www.movieposter.com/posters/archive/main/188/MPW-94080"});

var movie2 = new MovieModel ({title: "The Secret Life of Walter Mitty", synopsis: "When his job along with that of his co-worker are threatened, Walter takes action in the real world embarking on a global journey that turns into an adventure more extraordinary than anything he could have ever imagined.", image: "https://langleyfilmbox.files.wordpress.com/2014/08/walter-mitty-poster.jpg"});

var movie3 = new MovieModel ({title: "The Hundred-Foot Journey", synopsis: "The Kadam family leaves India for France where they open a restaurant directly across the road from Madame Mallory's Michelin-starred eatery.", image: "http://imageserver.moviepilot.com/the-hundred-foot-journey-new-trailer-poster-and-stills.jpeg?width=750&height=1111"});

var movie4 = new MovieModel ({title: "The Internship", synopsis: "Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google, where they must compete with a group of young, tech-savvy geniuses for a shot at employment.", image: "http://cdn.collider.com/wp-content/uploads/The-Internship-movie-poster.jpg"});
