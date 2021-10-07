import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXAgp3fcWLUG2HDxkV1z4MgaRmwsePvsM",
    authDomain: "farm-e97ce.firebaseapp.com",
    databaseURL: "https://farm-e97ce-default-rtdb.firebaseio.com",
    projectId: "farm-e97ce",
    storageBucket: "farm-e97ce.appspot.com",
    messagingSenderId: "628188671286",
    appId: "1:628188671286:web:62ed1e93d407f4f1c71797",
    measurementId: "G-4XKGY82QGX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database ,auth };