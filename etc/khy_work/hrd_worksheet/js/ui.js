$(document).ready(function(){
	//navigation
	$('.nav-box').mouseover(function(){
		$('.nav-sub-box, .nav-sub-lst').slideDown(100);
	})
	$('.header').mouseleave(function(){
		$('.nav-sub-box, .nav-sub-lst').slideUp(100);
	});

	//bbs
	$('.js_bbs_sbj').on('click',function(){
		
		var _parent=$(this).parent().parent();
		var _selection = $(this).attr('href');
		
		if(_parent.hasClass('on')){
			_parent.toggleClass('on');
			$(_selection).toggleClass('on');
		}else{
			_parent.siblings().removeClass('on');
			_parent.toggleClass('on');
			$(_selection).toggleClass('on');
		}
		return false;
	});

	//input_checkbox
	$('.js_chk input[type=checkbox]').each(function(){
		var _this=$(this);
		var _parent=$(this).parents('.js_chk');

		chk_control(_this,_parent);

		_this.click(function(){
			chk_control(_this,_parent);
		});
	});

	//input_radio
	$('.js_chk input[type=radio]').each(function(){
		var _this=$(this);
		var _parent=$(this).parents('.js_chk');

		chk_control(_this,_parent);

		_this.click(function(){
			rdo_control(_this,_parent);
		});
	});
	
	//quick_bar
	$('.js_top_scroll').on('click',function(){
		$('html, body').animate({'scrollTop':0}, 300);
	});

})


//chk_control
function chk_control(_this,_parent){
	if(_this.prop('checked')==false){
		_this.attr('checked', false);
		_parent.removeClass('on');
	}else{
		_this.attr('checked', true);
		_parent.addClass('on');
	}
}
//rdo_control
function rdo_control(_this,_parent){
	if($('input[name='+_this.attr('name')+']').attr('checked', true)){

		_parent.siblings().removeClass('on');
		_parent.siblings().children('input[type=radio]').attr('checked', false);

		_parent.addClass('on');
	}
}

//layer
function layer_open(obj) {
	var _layer = $('#' + obj);
	var _layerIn = _layer.children('.layer-inner');

	$('html, body').css({'overflow':'hidden'});
	
	_layerIn.css('margin-top', - _layerIn.outerHeight()*0.5 + 'px');
	_layerIn.css('margin-left', - _layerIn.outerWidth()*0.5 + 'px');
	_layer.show();

	_layer.find('.js_layer_close, .bg').click(function(e){
		$('html, body').removeAttr('style');
		_layer.hide();
		e.preventDefault();
	});
}
function layer_close(obj){
	var _layer = $('#' + obj);
	
	$('html, body').removeAttr('style');
	_layer.hide();
}

