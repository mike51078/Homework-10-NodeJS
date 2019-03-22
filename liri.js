
require("dotenv").config();

var spotify = require("node-spotify-api")
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var keys = require('./keys.js');
var fs = require('fs');
var spotify = new spotify(keys.spotify);


for (var i = 0; i < response.length; i++) {
    if (response[i]) {
      result += parseFloat(data[i]);
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

    function response() {

        fs.readFile("lifi.txt", "utf8", function(err, data) {
          if (err) {
            return console.log(err);
          }
      
          data = data.split(", ");
          var result = 0;
      
          // Loop through those numbers and add them together to get a sum.
          for (var i = 0; i < response.length; i++) {
            if (parseFloat(data[i])) {
              result += parseFloat(data[i]);
            }
          }
      
          // We will then print the final balance rounded to two decimal places.
          console.log("You have a total of " + result.toFixed(2));
        });
      }
      

      function concert_this() {
        fs.readFile("liri.txt" + value, function(err) {
          if (err) {
            return console.log(err);
          }
        });
        console.log("Concert is " + value + ".");
      }
      
      
      function spotify_this_song() {
      
        // We will add a negative value to the bank file.
        fs.appendFile("liri.txt" + value, function(err) {
          if (err) {
            return console.log(err);
          }
        });
      
        console.log("Spotify says " + value + ".");
      }


      function movie_this() {
      
        // We will add a negative value to the bank file.
        fs.appendFile("liri.txt" + value, function(err) {
          if (err) {
            return console.log(err);
          }
        });
      
        console.log("IMDB says " + value + ".");
      }


      function do_what_it_says() {
      
        // We will add a negative value to the bank file.
        fs.appendFile("liri.txt" + value, function(err) {
          if (err) {
            return console.log(err);
          }
        });
      
        console.log("Liri says, do this " + value + ".");
      }
