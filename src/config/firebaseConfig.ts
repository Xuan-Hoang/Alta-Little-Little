import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDm0uO2nCWcftkTIkwoWk3Ke1fT50RtLY8',
  authDomain: 'little-little-2f176.firebaseapp.com',
  databaseURL: 'https://little-little-2f176-default-rtdb.firebaseio.com',
  projectId: 'little-little-2f176',
  storageBucket: 'little-little-2f176.appspot.com',
  messagingSenderId: '238485261768',
  appId: '1:238485261768:web:618091ead872557b2504fd',
  measurementId: 'G-R5Q1094ZW8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
