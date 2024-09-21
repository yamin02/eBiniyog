var utils = require('./functions/utils');

var tweet = require("./pages/forum")
var stocks = require('./pages/stock');
var eachmf = require("./pages/eachmf");
import { HomePage } from "./pages/home";
import { dashboard, loginAuth } from "./pages/dashboard";
import { landing } from "./pages/desktopScreen";


const screenurl = {
  '/' : HomePage,
  '/home' :  HomePage ,
  '/stocks' : stocks.tableReal ,
  '/forum' :  tweet.forum , 
  '/eachmf': eachmf.infotab ,
  '/login' : loginAuth ,
  '/dashboard' : dashboard,
  '/landing' : landing,
}


const loader = async () => {
  utils.showloading();
  const request = utils.parseurl();
  const parseUrl = (request.resource ? `/${request.resource}` : '/' ) + (request.id? '/:id': '')
  var screen = screenurl[parseUrl];
  // Navs and other things added in prerender.js
  window.scrollTo(0, 0);
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


