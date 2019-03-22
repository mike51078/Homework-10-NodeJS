
var spotify = require("node-spotify-api")
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var keys = require('./keys.js');
var fs = require('fs');
var spotify = new spotify(keys.spotify);
require("dotenv").config();

