//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBQxA-jUpuS7aJUuk7gAEYCmYsnYDIbLpc",
    authDomain: "comp1800-demo-a2055.firebaseapp.com",
    projectId: "comp1800-demo-a2055",
    storageBucket: "comp1800-demo-a2055.appspot.com",
    messagingSenderId: "895098239634",
    appId: "1:895098239634:web:6cde1c5a6c886b56a7c44b"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
