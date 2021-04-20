import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAe65nj5s-0Qxk8Yj8lUca4y4NFHKY5ArI",
    authDomain: "instaclone-196d5.firebaseapp.com",
    databaseURL: "https://instaclone-196d5-default-rtdb.firebaseio.com",
    projectId: "instaclone-196d5",
    storageBucket: "instaclone-196d5.appspot.com",
    messagingSenderId: "295880464320",
    appId: "1:295880464320:web:ec7e47ce2259b004149a25",
    measurementId: "G-T3DCW4DNDG"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

//console.log(db.username);

export {db, auth, storage};

//export default firebase;