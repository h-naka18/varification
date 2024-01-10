import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC1KddTcM9z0CxB0A2fRI6qquqQR9hBSXo",
  authDomain: "nakamura-react18.firebaseapp.com",
  projectId: "nakamura-react18",
  storageBucket: "nakamura-react18.appspot.com",
  messagingSenderId: "70162772410",
  appId: "1:70162772410:web:7196ceedafdd397be72d83"
}

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}