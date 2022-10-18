import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGE_SENDING_ID,
  //   appId: process.env.APP_ID,
  //   measurementId: process.env.MEASUREMENT_ID,

  apiKey: 'AIzaSyBYbfvKPCQECyK0z7gl-Uj1jhPsFWRNSMs',
  authDomain: 'ejam-72a4c.firebaseapp.com',
  projectId: 'ejam-72a4c',
  storageBucket: 'ejam-72a4c.appspot.com',
  messagingSenderId: '614681326173',
  appId: '1:614681326173:web:d0b2110ad0c004d930d3b4',
  measurementId: 'G-QRT2K06FR1',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
