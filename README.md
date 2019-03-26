UCF Coding Bootcamp Homework 10 - NodeJS

This assignment was to create an application called LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


* LIRI will search the Spotify API for songs, Bands in Town API for concerts, and OMDB API for movies.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)
   
   * [OMDB](http://www.omdbapi.com)
   
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
   

The following technologies were used in the creation of this application:
* NodeJS
* API Query
* JavaScript


### Contents

1. The `package.json` file included in the project is required for installing third party npm packages and saving their version numbers. Without the `package.json` file it will be troublesome, and at times almost impossible, for anyone else to run this code after cloning the project.

2. The `.gitignore` file was created to let git not to track these files, and thus they won't be committed to Github.  This was used for the 'node_modules', '.DS_Store', and '.env' files.

3. Make a JavaScript file named `keys.js`.  This contains the link to the '.env' file directing the program to get the API keys for spotify.

4. The `.env` file was created to replace the values for the API keys (no quotes) for Spotify.  This file is used by the `dotenv` package to set environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since this file was placed into the 'gitignore' file, they won't be pushed to github.

* If you want to clone this application from github and run it yourself, you will need to supply your own `.env` file for it to work.

5. The `random.txt` contains data which is used to test the 'do-what-it-says' command.  The file contains the following in with no extra characters or white space.

     * spotify-this-song,"I Want it That Way"
     

6. The `liri.js` file performs numerous functions.  At the top of the file, there is code to read and set any environment variables with the dotenv package.  There is additionally code to import the `keys.js` file and store it in a variable.  Liri.js is able to take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
![Concert-This](https://user-images.githubusercontent.com/45186642/55025938-49ba7f00-4fd8-11e9-88c9-bf257e0e91cf.gif)

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

![Spotify-This-Song](https://user-images.githubusercontent.com/45186642/55026197-e67d1c80-4fd8-11e9-935e-3ac65ac132a6.gif)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![Movie-This](https://user-images.githubusercontent.com/45186642/55026246-014f9100-4fd9-11e9-98d4-7f8294ab64be.gif)

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.
     
     ![Do-What-It-Says](https://user-images.githubusercontent.com/45186642/55026330-2b08b800-4fd9-11e9-86e5-4322944f8b5a.gif)


Thank you for taking the time to review this.  If you have any questions, please reach out to me at elcid00@aol.com.
