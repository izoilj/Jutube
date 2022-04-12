import firebase from 'firebase/compat/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD0IRnI-eRF_hpEVQDblkWQlP7cY1nQbwc',
  authDomain: 'self-ed2ed.firebaseapp.com',
  projectId: 'self-ed2ed',
  storageBucket: 'self-ed2ed.appspot.com',
  messagingSenderId: '739611208054',
  appId: '1:739611208054:web:17e61f636dee9678f37257',
  measurementId: 'G-30LCWE241X',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
