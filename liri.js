
require("dotenv").config();

var spotify = require("node-spotify-api")
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var keys = require('./keys.js');
var fs = require('fs');
var spotify = new spotify(keys.spotify);


var response = process.argv;

var action = response[2];
var userInput = response[3];

for (var i = 4; i < response.length; i++) {
    userInput += "+" + response[i];
}

    switch (action) {

        case "concert-this":
            concert_this();
            break;

        case "spotify-this-song":
            spotify_this_song();
            break;
        
        case "movie-this":
            movie_this();
            break;
        
        case "do-what-it-says":
            do_what_it_says();
            break;
        }

// BANDS IN TOWN
      function concert_this() {
        var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
        axios
            .get(queryUrl)
            .then(function(concert) {
            console.log('===================================================')
            console.log('');
            console.log("Venue name: " + concert.data[0].venue.name);
            console.log("Venue location: " + concert.data[0].venue.city + ", " + concert.data[0].venue.region);
            console.log("Date of concert: " + moment(concert.data[0].datetime).format("MM/DD/YYYY"));
            console.log('');
            console.log('===================================================')
            // console.log(concert.data[0]);
        })

      }

//SPOTIFY
      function spotify_this_song() {
          if (!userInput) {
              userInput = "the sign ace of base"
          };
         
        spotify
            .search({ type: 'track', query: userInput, limit: 1 })
            .then(function(response) {
            // console.log(response);
            console.log('===================================================')
            console.log('');
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Name of Song: " + response.tracks.items[0].name);
            console.log("Link to Song: " + response.tracks.items[0].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log('');
            console.log('===================================================')

        });
    }  


//IMDB
      function movie_this() {
        if (!userInput) {
            userInput = "mr nobody"
        };
        
        var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        axios
            .get(queryUrl)
            .then(function(entry) {
                console.log('===================================================')
                console.log('');
                console.log("Title: " + entry.data.Title);
                console.log("Release Year: " + entry.data.Year);
                console.log("IMDB Rating: " + entry.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + entry.data.Ratings[1].Value);
                console.log("Country Where Movie Was Produced: " + entry.data.Country);
                console.log("Language of the Movie: " + entry.data.Language);
                console.log("Plot of the Movie: " + entry.data.Plot);
                console.log("Actors in the Movie: " + entry.data.Actors);
                console.log('');
                console.log('===================================================')
            })
         }

//DO WHAT IT SAYS...NOW
      function do_what_it_says() {
        fs.readFile("./random.txt", "utf8", function(error, response)  {
            if (error) {
                return console.log(error);
            };
            response = response.split(",");
            action = response[0];
            userInput = response[1]
            console.log(action);
            console.log(userInput);
          });
        }