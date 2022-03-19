import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgZ3hmjQ0gVJlMfTVvb3QeBoKvZyufEcs',
  authDomain: 'cooking-pad-2c318.firebaseapp.com',
  projectId: 'cooking-pad-2c318',
  storageBucket: 'cooking-pad-2c318.appspot.com',
  messagingSenderId: '51939192905',
  appId: '1:51939192905:web:ad9da83e2a839318ef0f98',
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
