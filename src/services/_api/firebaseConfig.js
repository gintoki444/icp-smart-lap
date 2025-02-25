import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByzyLqqjMhjnm_qY9Y6T8b1u7rToNz3v8',
  authDomain: 'icp-smart-lab.firebaseapp.com',
  projectId: 'icp-smart-lab',
  storageBucket: 'icp-smart-lab.firebasestorage.app',
  messagingSenderId: '344878866991',
  appId: '1:344878866991:web:4bcc275a5c072a6466dcda'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
