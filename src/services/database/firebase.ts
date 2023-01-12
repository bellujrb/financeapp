import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAxWyNJy-JwA6e5bdl7HNgS5IzqXhyFqR4",
    authDomain: "todoapp-4623d.firebaseapp.com",
    databaseURL: "https://todoapp-4623d-default-rtdb.firebaseio.com",
    projectId: "todoapp-4623d",
    storageBucket: "todoapp-4623d.appspot.com",
    messagingSenderId: "934434059991",
    appId: "1:934434059991:web:10c0586d9009ef37a76292",
    measurementId: "G-R3W615G1XY"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;