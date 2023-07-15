// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM3Qv_0g6lPq-zwG_qgDIc_rL5Sal_lQc",
  authDomain: "minor-c3d6c.firebaseapp.com",
  projectId: "minor-c3d6c",
  storageBucket: "minor-c3d6c.appspot.com",
  messagingSenderId: "465745607902",
  appId: "1:465745607902:web:9b06aff4734723a11dd64f",
  measurementId: "G-RN5X2QBRKX"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export{app,auth}