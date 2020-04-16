import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBpIRx-t5cxstf73HQkt6ZwxGG931AvdDQ',
  authDomain: 'crwn-db-9e755.firebaseapp.com',
  databaseURL: 'https://crwn-db-9e755.firebaseio.com',
  projectId: 'crwn-db-9e755',
  storageBucket: 'crwn-db-9e755.appspot.com',
  messagingSenderId: '584656100830',
  appId: '1:584656100830:web:dff4a18a77595321d2514f',
  measurementId: 'G-K416884ZNB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);

export default firebase;
