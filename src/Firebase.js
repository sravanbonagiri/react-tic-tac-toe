import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

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

firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;