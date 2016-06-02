import Firebase from 'firebase/firebase-browser';

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
};

Firebase.initializeApp(config);

const DatabaseRef = Firebase.database().ref();
const StorageRef = Firebase.storage().ref();
const StorageImagesRef = StorageRef.child('images');
const Auth = Firebase.auth();

export {
	Auth,
	DatabaseRef,
	StorageRef,
	StorageImagesRef
}