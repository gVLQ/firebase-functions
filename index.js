const functions = require("firebase-functions");

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login, uploadImage } = require('./handlers/users');

//Get Screams
app.get("/screams", getAllScreams);
// Post one scream
app.post("/scream", FBAuth, postOneScream);

// Signup route
app.post("/signup", signUp);
//Login Route
app.post('/login', login)
//
app.options('/user/image',FBAuth, uploadImage)

exports.api = functions.region("europe-west1").https.onRequest(app);
