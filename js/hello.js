var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) 
{
    greeting = 'Good evening!';
} else if (hourNow > 12) 
{
    greeting = 'Good afternoon!';
} else if (hourNow > 0) 
{
    greeting = 'Good morning!';
} else 
{
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');
var name='Flinstones';
var len=name.length;
var abc= len*7;
var ship= 8;
var gt= abc+ship;
var el=document.getElementById("description");
el.textContent='Name on the plate : ';
var el2=document.getElementById("rate");
el2.textContent= name;
var el3=document.getElementById("item1");
el3.textContent= 'Words';
var el4=document.getElementById("price1");
el4.textContent= '$' + abc;
var el5=document.getElementById("item2");
el5.textContent= 'Shipping';
var el6=document.getElementById("price2");
el6.textContent= '$' + ship;
var el7=document.getElementById("item3");
el7.textContent= 'Grand Total';
var el6=document.getElementById("price3");
el6.textContent= '$' + gt;

var msg='Use "AFG23" Code to get 50% Off next time.\n Thanks for Shopping';
function Aupdate(){
	var elem = document.getElementById("message");

	
	elem.textContent=msg;
}

Aupdate();





