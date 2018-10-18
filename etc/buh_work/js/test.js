$(function(){
	var nav=$('.nav>ul>li>a:not(:animated)')
	nav.on('mouseenter',function(){
		$('.nav>ul>li>ul').hide()
		$(this).parent().find('>ul').show();
	});
	$('.nav>ul').on('mouseleave',function(){
		$(this).find('ul').hide()
	});
});


