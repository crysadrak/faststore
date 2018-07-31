import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBbjDrpJ-ZNEXY_Y-ynCKHAU7Dn2qxrLfg",
  authDomain: "faststore-21785.firebaseapp.com",
  databaseURL: "https://faststore-21785.firebaseio.com",
  projectId: "faststore-21785",
  storageBucket: "",
  messagingSenderId: "745405757547"
};

export default firebase.initializeApp(config);