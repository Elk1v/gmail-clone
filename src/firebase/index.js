import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDDaKxH5701W-mKSbfcjeTTp3Q9Lck-ovw',
  authDomain: 'clone-38cd2.firebaseapp.com',
  projectId: 'clone-38cd2',
  storageBucket: 'clone-38cd2.appspot.com',
  messagingSenderId: '575221960021',
  appId: '1:575221960021:web:a418ddd6caf741e232b3dc',
  measurementId: 'G-V444WGZ6M2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { dataBase, auth, provider };
