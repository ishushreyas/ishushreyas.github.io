//console.log("still working on it");

if( screen.width > 400){

  location.replace("https://ishushreyas.github.io/msg/");

  }
window.gender = "";

window.gender_f = ""

function setthm() {

 var g1 = document.getElementById("g1")

  .checked;

 var g2 = document.getElementById("g2")

  .checked;

 var m = document.getElementById(

  "mlbl");

 var f = document.getElementById(

  "fmlbl");

 if (g1) {

  m.style.color = "red";

  f.style.color = "rgb(122,122,222)";

  gender = "male";

 } else if (g2) {

  f.style.color = "red";

  m.style.color = "rgb(122,122,222)";

  gender = "female";

 }

}

function settm() {

 var g1 = document.getElementById("g3")

  .checked;

 var g2 = document.getElementById("g4")

  .checked;

 var m = document.getElementById(

  "mlbl1");

 var f = document.getElementById(

  "fmlbl1");

 if (g1) {

  m.style.color = "rgb(22,122,222)";

  f.style.color = "#faeded";

  gender_f = "male";

 } else if (g2) {

  f.style.color = "red";

  m.style.color = "#faeded";

  gender_f = "female";

 }

}

function sgintb() {

 document.getElementById("signuptb")

  .style.transform =

  "scale(0,0) translateX(370px)";

 document.getElementById("signintb")

  .style.transform =

  "scale(1,1) translateX(0px)";

 document.getElementById("frgt").style

  .transform =

  "scale(0,0) translateX(740px)";

}

function signuptb() {

 document.getElementById("signuptb")

  .style.transform =

  "scale(1,1) translateX(0px)";

 document.getElementById("signintb")

  .style.transform =

  "scale(0,0) translateX(-370px)";

 document.getElementById("frgt").style

  .transform =

  "scale(0,0) translateX(370px)";

}

function homePeople() {

 let e = document.getElementById(

  "explore");

 e.hidden = true;

 e.innerHTML =

  '<span onclick="homePeople()" class="material-symbols-outlined">arrow_back</span>';;

 document.getElementById("profile")

  .hidden = false;

}

function homePchat() {

 document.getElementById("app")

  .hidden = true;

 document.getElementById("dashboard")

  .hidden = false;

 document.getElementById("cmt")

  .innerHTML = "";

}

function frgttb() {

 document.getElementById("signuptb")

  .style.transform =

  "scale(0,0) translateX(-740px)";

 document.getElementById("signintb")

  .style.transform =

  "scale(0,0) translateX(-370px)";

 document.getElementById("frgt").style

  .transform =

  "scale(1,1) translateX(0px)";

}

var d = new Date(),

 h = (d.getHours() < 10 ? '0' : '') + d

 .getHours(),

 min = (d.getMinutes() < 10 ? '0' :

  '') + d.getMinutes();

window.time = h + ":" + min;

var today = new Date();

var dd = String(today.getDate())

 .padStart(2, '0');

var mm = String(today.getMonth() + 1)

 .padStart(2, '0'); //January is 0!

window.yyyy = today.getFullYear();

window.today = mm + '/' + dd + '/' +

 yyyy;
