import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDe2DhFGylSuOW-xGjAbfQHLEk_kJh64-A",
    authDomain: "finance-app-7886a.firebaseapp.com",
    projectId: "finance-app-7886a",
    storageBucket: "finance-app-7886a.appspot.com",
    messagingSenderId: "709184908376",
    appId: "1:709184908376:web:082e897524f573063bae2d",
    measurementId: "G-YK31PBT9PX"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;