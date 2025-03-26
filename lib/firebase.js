// import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyC5-lQ8bW0rJ60FVUjvNV3rcUaIOp9yVUU",
	authDomain: "defi-crypto-project.firebaseapp.com",
	projectId: "defi-crypto-project",
	storageBucket: "defi-crypto-project.firebasestorage.app",
	messagingSenderId: "907149231545",
	appId: "1:907149231545:web:83aec35ba29294b869e268",
	measurementId: "G-J7C8RPH4FL",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
