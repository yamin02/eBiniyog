var utils = require('./functions/utils');

var mainpage =require("./pages/mainpage")
var tweet = require("./pages/forum")
var stocks = require('./pages/stock');
var eachmf = require("./pages/eachmf")


const screenurl = {
  '/' : mainpage.infotab ,
  '/home' :  mainpage.infotab ,
  '/stocks' : stocks.tableReal ,
  '/forum' :  tweet.forum , 
  '/eachmf': eachmf.infotab ,
}


const loader = async () => {
  utils.showloading();
  const request = utils.parseurl();
  const parseUrl = (request.resource ? `/${request.resource}` : '/' ) + (request.id? '/:id': '')
  var screen = screenurl[parseUrl];
  // Navs and other things added in prerender.js
  await screen.rend();
  await screen.afterRend();
  utils.hideloading();

} 

window.addEventListener('load', async function () { 
  utils.showloading();
  // var data  = await utils.dsetoLocalstorage();
  await loader();
}) ;

window.addEventListener('hashchange' , loader);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7s96Hoz3DJt8IsbwY27QXPJM-uNxxgv0",
  authDomain: "ebiniyog-yamin.firebaseapp.com",
  projectId: "ebiniyog-yamin",
  storageBucket: "ebiniyog-yamin.appspot.com",
  messagingSenderId: "1045006862883",
  appId: "1:1045006862883:web:cdcec203983add0bacff96",
  measurementId: "G-00PFG6BJZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
