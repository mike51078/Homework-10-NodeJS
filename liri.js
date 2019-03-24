
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
        console.log(queryUrl);

        
      }

//SPOTIFY
      function spotify_this_song() {
         
        spotify
            .search({ type: 'track', query: userInput, limit: 1 })
            .then(function(response) {

                console.log(response);
            // console.log('===================================================')
            // console.log('');
            // console.log("Artist: " + response.data.items[] + ".");
            // console.log("Name of Song: " + response.data.Name);
            // console.log("Link to Song: " +response.data.Link);
            // console.log("Album: " + response.data.Album);
            // console.log('');
            // console.log('===================================================')

        });
    }  


//IMDB
      function movie_this() {
        
            var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
            console.log(queryUrl);
            axios.get(queryUrl).then(
            function(entry) {
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
            if (error) throw error;
            response = response.split(",");
            action = response[0];
            userInput = response[1]
            console.log(action);
            console.log(userInput);
          });
        }