import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

//CONFIGURACION FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVNUr3948Imtg9BcnDFc-FffQZwl__kOY",
  authDomain: "proyectocoderreact-a5384.firebaseapp.com",
  projectId: "proyectocoderreact-a5384",
  storageBucket: "proyectocoderreact-a5384.appspot.com",
  messagingSenderId: "1036622094119",
  appId: "1:1036622094119:web:33c502b91372eeaf805302"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
