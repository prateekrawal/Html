function check()
{
	var el=document.getElementById('msg');
	if(this.value.length<7)
	{
		el.textContent='Username must be > 7 char';
	}
	else
		el.textContent='';
}
function setup()
{
	var abc=document.getElementById('username');
	abc.focus();
}
var el1=document.getElementById('buzz');
el1.addEventListener('blur',check,false);
window.addEventListener('load',setup,false);


var a;
function charcount(e)
{
	var textEntered, cahrdisp,counter,lastkey;
	textEntered=document.getElementById('comment').value;

	cahrdisp=document.getElementById('wordsleft');
	counter=(180- (textEntered.length));
	cahrdisp.textContent= counter + 'Words Left';
	lastkey=document.getElementById('lastkey');
	lastkey.textContent= 'Last Key in ASCII Code is ' + e.keyCode;
}
a=document.getElementById('comment');
a.addEventListener('keypress',charcount,false);


$(function()
{
	var listitem,status,eventtype;
	$('#list').on('click mouseover', {status:'important'}, function(e)
	{
		listitem='Item: '+ e.target.textContent + '<br>';
		status = 'Status : ' + e.data.status + '<br>';
		eventtype='Event : ' + e.type;
		$('#notes').html(listitem + status + eventtype);
	}
	);
});
$(function()
{
	$('h1').hide().slideDown();
	var $li = $('li');
	$li.hide().each(function(index)
	{
		$(this).delay(700*index).fadeIn(700);
	});
	$li.on('click',function()
	{
		$(this).fadeOut(700);
	})
});