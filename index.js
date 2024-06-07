var utils = require('./functions/utils');

var mainpage =require("./pages/mainpage")
var tweet = require("./pages/forum")
var stocks = require('./pages/stock');
var eachmf = require("./pages/eachmf");
import { loginAuth } from "./pages/login";


const screenurl = {
  '/' : mainpage.infotab ,
  '/home' :  mainpage.infotab ,
  '/stocks' : stocks.tableReal ,
  '/forum' :  tweet.forum , 
  '/eachmf': eachmf.infotab ,
  '/login' : loginAuth 
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


