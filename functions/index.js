const functions = require('firebase-functions');
var admin = require("firebase-admin");

const config = {
    apiKey: "AIzaSyClmc5cdr3DH9ZmIAnGsaA82CqGz960jOI",
    authDomain: "reacttictactoe-49076.firebaseapp.com",
    databaseURL: "https://reacttictactoe-49076.firebaseio.com",
    projectId: "reacttictactoe-49076",
    storageBucket: "reacttictactoe-49076.appspot.com",
    messagingSenderId: "499622440859",
    appId: "1:499622440859:web:5120c1cb5f61790ebc3b3e",
    measurementId: "G-JVX7WFR2MW"
  };

admin.initializeApp(config);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.storeGameData = functions.https.onRequest(function(request, response) {
    admin.database().ref("tic-tac-toe").push({
        game_history: "Testing"
      });
    response.send("Saved Data")
});
