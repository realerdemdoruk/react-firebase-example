// import firebase from 'firebase/app';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBaK5BubySwX-hcDBdAbeEtF6eT9ls7weQ',
  authDomain: 'kisiler-9cb82.firebaseapp.com',
  projectId: 'kisiler-9cb82',
  storageBucket: 'kisiler-9cb82.appspot.com',
  messagingSenderId: '881075481981',
  appId: '1:881075481981:web:f9af483e2f949af7a4f014',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
