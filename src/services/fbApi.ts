import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

export const firebaseApp = {
  apiKey: 'AIzaSyDTGu5J3H_IK0KvbuGsc64vHKxc9mQLS8s',
  authDomain: 'dev-list-b2d47.firebaseapp.com',
  projectId: 'dev-list-b2d47',
  storageBucket: 'dev-list-b2d47.appspot.com',
  messagingSenderId: '587626336221',
  appId: '1:587626336221:web:4b7c3c5a204f9b5c26f034',
  measurementId: 'G-CRTLTMYFGM'
};

// Initialize Firebase
const app = initializeApp(firebaseApp);

const db = getFirestore(app);
const devCollectionRef = collection(db, 'devs');

// useEffect(()=>{
//     const getDevs = async () => {
//         const data = await getDocs(devCollectionRef);
//         console.log(data);
//     };
//     getDevs();
// },[]);
