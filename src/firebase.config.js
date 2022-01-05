// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCQVgaszgM6mDcRKxgjrZMpewWhrWevL6A",
	authDomain: "house-marketplace-app-bba7b.firebaseapp.com",
	projectId: "house-marketplace-app-bba7b",
	storageBucket: "house-marketplace-app-bba7b.appspot.com",
	messagingSenderId: "321727568291",
	appId: "1:321727568291:web:0b16614ef90843e54a6216"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()