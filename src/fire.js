import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3ambXVwUn94QGThePWdhpV1teso8iTv4",
  authDomain: "maxim-aidar--project.firebaseapp.com",
  projectId: "maxim-aidar--project",
  storageBucket: "maxim-aidar--project.appspot.com",
  messagingSenderId: "661439083210",
  appId: "1:661439083210:web:06f7beff59aca54f563a33"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
