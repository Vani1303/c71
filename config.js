import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD_SbFLaYefYIMn9eF88tDOl5clltN4yR4",
    authDomain: "pro711-2b77b.firebaseapp.com",
    projectId: "pro711-2b77b",
    storageBucket: "pro711-2b77b.appspot.com",
    messagingSenderId: "775492158649",
    appId: "1:775492158649:web:6e0d4ab687e94d4fb04768"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
