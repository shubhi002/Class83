import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvj2ettR4QNmp-bLI8rAqNpqqXZkOSleo",
  authDomain: "e-ride-stage-4-48f53.firebaseapp.com",
  projectId: "e-ride-stage-4-48f53",
  storageBucket: "e-ride-stage-4-48f53.appspot.com",
  messagingSenderId: "956198118670",
  appId: "1:956198118670:web:67dc06bfee39b2c005235f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
