// MainNav 開闔
$('#mainNav > ul > li').hover(function(){
	$(this).toggleClass('hover')
})

$('#menu-bar').click(function(){
	$('#phoneNav').addClass('open')
})

$('#close').click(function(){
	$('#phoneNav').removeClass('open')
})