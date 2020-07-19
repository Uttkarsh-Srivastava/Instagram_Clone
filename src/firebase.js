import firebase from "firebase/app";
import "firebase/firestore";
firebase.initializeApp({
    apiKey: "AIzaSyD27kuLdP7MQIp8hSTHCEuFxptz8NPi4EA",
    authDomain: "instagram-clone-38544.firebaseapp.com",
    databaseURL: "https://instagram-clone-38544.firebaseio.com",
    projectId: "instagram-clone-38544",
    storageBucket: "instagram-clone-38544.appspot.com",
    messagingSenderId: "8942996879",
    appId: "1:8942996879:web:2e44949a32bf872bd0cffa",
    measurementId: "G-LZNLXBJ8LZ",
});

const db = firebase.firestore();
// const auth = firebaseApp.auth();
// const storage = firebaseApp.storage();

export { db };
