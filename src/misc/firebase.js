import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDuHqJTs-ZIfJxor3t7CMvoPH3ZixWSKFU',
  authDomain: 'chat-web-app-50ab4.firebaseapp.com',
  projectId: 'chat-web-app-50ab4',
  storageBucket: 'chat-web-app-50ab4.appspot.com',
  messagingSenderId: '732567197279',
  appId: '1:732567197279:web:48dce5df91e43116206dea',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
