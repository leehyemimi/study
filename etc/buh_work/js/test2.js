
/*bxslider player*/
 $(function(){
		var mySlider = $('.slide_banner').bxSlider({
		auto: true, 
		mode:'horizontal',
		/*
		mode: 'horizontal',// ���� ���� ���� �����̵�
        speed: 500,        // �̵� �ӵ��� ����
        pager: false,      // ���� ��ġ ����¡ ǥ�� ���� ����
        moveSlides: 1,     // �����̵� �̵��� ����
        slideWidth: 300,   // �����̵� �ʺ�
        minSlides: 1,      // �ּ� ���� ����
        maxSlides: 1,      // �ִ� ���� ����
        slideMargin: 5,    // �����̵尣�� ����
        auto: true,        // �ڵ� ���� ����
        autoHover: true,   // ���콺 ȣ���� ���� ����
        controls: false    // ���� ���� ��ư ���� ����
		*/
	});
});

/*bottom tab*/
$(function(){
	var Btn=$('.tabListBtn li a');
	var Cont=$('.tabListSec>li');
	
	Btn.on('click',function(){
		var Nm=$(this).parent().index();
		var Bthis=$(this).parent();
		Btn.parent().removeClass('on');
		Bthis.addClass('on');
		Cont.eq(Nm).show().siblings().hide();
	});
});
