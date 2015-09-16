//login page

var keys = document.getElementById("numbers");
var displayScreen = document.querySelector("#screen");
var span = document.getElementsByTagName("span");
var screenBorder = document.getElementById("top");

var numSpan = document.getElementsByClassName('numSpan');

//limit 4 character count on screen
for(var i = 0; i < numSpan.length; i++){
  numSpan[i].addEventListener('click', function(event){
      var length = 4;
      displayScreen.innerHTML += event.target.textContent;
      displayScreen.innerHTML = displayScreen.textContent.substring(0, length);
      displayScreen.style.color = "white";
      displayScreen.style.textShadow = "0 0 3px white";
      screenBorder.style.border = "1px solid white";
      screenBorder.style.boxShadow = "0 0 4px white";
  });
}

/*
limit 4 character count on screen
keys.addEventListener("click", function(event){
  var length = 4;
  displayScreen.innerHTML += event.target.textContent;
  displayScreen.innerHTML = displayScreen.textContent.substring(0, length);
  displayScreen.style.color = "white";
  displayScreen.style.textShadow = "0 0 3px white";
  screenBorder.style.border = "1px solid white";
  screenBorder.style.boxShadow = "0 0 4px white";
});
*/

//cancel button resets screen
function refresh() {
	displayScreen.innerHTML = '';
  screenBorder.style.border = "none";
  screenBorder.style.boxShadow = "none";
}


//login button
function enter() {
  var loginNumber = 1234;
  var userLogIn = displayScreen.innerText;

	if(userLogIn == loginNumber){
		window.location.href = "file:///C:/Users/Roger/Desktop/Official/new-js-project/home.html";
	} else {
		alert("Sorry please enter the correct passcode");
		displayScreen.innerHTML = '';
    screenBorder.style.border = "none";
    screenBorder.style.boxShadow = "none";
	}
}

//randomly generate 4 digit numbers for login page
//function getRandom(min, max) {
//  var randomNum = Math.floor((Math.random() * 9999 + 1000);

//}

//var randomNum = confirm(Math.floor((Math.random() * 9999)+ 1000));
  
//console.log(randomNum);

// 2nd page, home page


var scrollUpTop;
function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
    window.scrollBy(0, -50);
    scrollUpTop = setTimeout('scrollToTop()', 20);
  }
  else clearTimeout(timeOut);
}