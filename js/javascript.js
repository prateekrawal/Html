var image,butt;
image=document.getElementById('abc');
var user=document.getElementById('user');
var msg=document.querySelector('h2');
butt=document.getElementById('but');
butt.onclick=function clc()
{
	var mysrc=image.getAttribute('src');
	if(mysrc=='image/bb.jpg')
		image.setAttribute('src', 'image/bg.jpg');
	else
		image.setAttribute('src', 'image/bb.jpg');


}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  msg.textContent = 'Deloitte USI, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  msg.textContent = 'Hello hello, ' + storedName;
}
user.onclick=function()
{
	setUserName();
}