function ui_init(){
	var url = $(location).attr("search").split("mod=");
	var nm = "#" + url[1];

	$(".js-tab a").each(function(){
		if($(this).attr("target") != "_blank"){
			var $div = $(this).parents(".js-tab-type1").parent();
			var $li = $(this).parent().siblings("li");
			var $id = $(this).attr("href");

			if($id == nm){
				$li.removeClass("on");
				$(this).parent().addClass("on");

				$(".js-tab-con",$div).hide();
				$($id).show();
			}
		}
	});

	$(".js-tab a").click(function(){
		var $div = $(this).parents(".js-tab").parent();
		var $ul = $(this).parents(".js-tab");
		var $li = $(this).parent().siblings("li");
		var $id = $(this).attr("href");

		$li.removeClass("on");
		$(this).parent().addClass("on");

		if($ul.hasClass("only_tab") == 0){
			$(".js-tab-con",$div).hide();
			$($id).show();
			return false;
		}
	});

	$(".chk_area.input_chk label .sub_ico").hover(function(){
		e_layerPop("login_info");
	});


	$(".input_chk input").click(function(){
		if($(this).parents(".input_chk").hasClass("radio_input") == false){
			if($(this).is(':checked') == false){
				$(this).parents(".input_chk").removeClass("on");
			}else{
				$(this).parents(".input_chk").addClass("on");
			}
		}else{
			if($(this).is(':checked') == true){
				$(".radio_input").removeClass("on");
				$(this).parents(".input_chk").addClass("on");
			}
		}
	});

	$(".arrow_btn").click(function(){
		$(this).toggleClass("on");
	});

	$(".ico_help").hover(function(){
		var id =  $(this).attr("href");
		$(id).show();
	});
	
	//미등록
	//var signInput = $(".sign_up input");
	//signInput.click(function(){
		//if($(this).parents(".sign_up").hasClass("on") == false){
			//$(this).parents(".sign_up").addClass("on");
		//}else{
			//$(this).parents(".sign_up").removeClass("on");
		//}
	//});
}

$(document).ready(function(){
	ui_init();
	noteList();
	noteList_pop();
	classroom_list(true);
});

// 단어장페이지
function noteList(){
	var $selectItem = $('#selectItem');

	$selectItem.on('change' , function(){
		var value = $selectItem.val(),
			$valueList = $('.vocabularyNote_list_c').find('a').parent();

		if(value == 0){
			$valueList.find('em').show();
			$valueList.find('span').show();
		}
		else if(value == 1){
			$valueList.find('em').show();
			$valueList.find('span').hide();
		}
		else{
			$valueList.find('em').hide();
			$valueList.find('span').show();
		}
	})
}

function noteList_pop(){
	var $selectionList = $('.vocabularyNote_list_c').find('li > a'),
		$selContent = $('.noteList_popup_w');

	$selectionList.on('click' , function(){
		var listIde = $(this).index($selectionList);

		$selContent.eq(listIde).show().find('.noteList_close').click(function(){
			$selContent.eq(listIde).fadeOut();
		});
	})
}

function toggle_btn(el,etc){
	$(function(){
		$("."+etc).hide();
		$("#"+el).toggle();
	});
}

function layer_open(el){
	$(function(){
		$("#"+el).show();
	});
}

function layer_close(el){
	$(function(){
		$("#"+el).hide();
	});
}

function classroom_list(classclick){
	var $classroom_listBtn = $('.classroom_listBtn'),
		$classroom_listCon = $('.classroom_listCon'),
		$classroom_li = $classroom_listCon.find('li'),
		$classroom_em = $classroom_li.find('em'),
		classSell = classclick;

	function classRoom_isopen(){
		if(classSell){
			$classroom_listCon.addClass('on');
			$classroom_em.css('display' , 'block');
			//$classroom_li.children().first().addClass('on');
		}
		else{
			$classroom_listCon.removeClass('on');
			$classroom_em.hide();
			//$classroom_li.children().first().removeClass('on');
		}
		classSell =! classSell;
	}
	$classroom_listBtn.click(classRoom_isopen);
}


// 이벤트 레이어팝업
function e_layerPop(el, func) {
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg'); //dimmed 레이어를 감지하기 위한 boolean 변수
	var id = temp.attr("id");
	var mobile = document.getElementById('is_mobile').value;
	
	if(bg){
		$("#"+id).parent().fadeIn();
	}else{
		temp.fadeIn();
	}

	// 화면의 중앙에 레이어를 띄운다.
	if(mobile=='N'){
		if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
		else temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
		else temp.css('left', '0px');
	}else{
		var _pos=$(window).scrollTop();
		//temp.css('top', '+'+_pos+ 'px');
		temp.css('margin-top', +($(window).outerHeight() * 0.5) - (temp.outerHeight() *0.5) +'px' );
		//temp.css('margin-top:20px' );
	}

	temp.find('.close').click(function(e){
		if(bg){
			$("#"+id).parent().fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
			temp.fadeOut();
		}
		return false;
	});

	//temp.parent().find('.bg').click(function(e){ //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
	//	$("#"+id).parent().fadeOut();
	//});

	if(typeof func=='function'){
		func();
	}
}

// s:iframe layer open

Number.prototype.format = function(){
    if(this==0) return 0;
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n;
};

var fm_all = null;
var div = null;
var layerdiv = null;
var fm = null;

function coverScreen() {
	var h = parseInt(document.documentElement.scrollHeight) + "px";
	var w = parseInt(document.body.offsetWidth) + "px";

	div = document.getElementById("layer_pop_box");

	document.body.appendChild(div);

	//document.body.onresize = document.body.onresizestart = document.body.onresizeend = document.body.onscroll = function () {
		//layerdiv.style.left = (parseInt(document.documentElement.clientWidth) / 2) - (parseInt(layerdiv.style.width) / 2) + 'px';
	//}

	layerdiv = document.createElement("div");
	layerdiv.style.width = 400;
	layerdiv.style.height = 400;
	layerdiv.style.left = (parseInt(document.documentElement.clientWidth) / 2) - (parseInt(layerdiv.style.width) / 2) + 'px';
	layerdiv.style.top = (parseInt(document.documentElement.clientHeight) / 2) - (parseInt(layerdiv.style.height) / 2) + 'px';
	layerdiv.style.position = "absolute";
	layerdiv.style.zIndex = 9990;
	layerdiv.style.display = "none";
	layerdiv.style.backgroundColor = "transparent";
	layerdiv.style.color = "#FFFFFF";
	document.body.appendChild(layerdiv);
	
	//아이프레임으로 넣기
	/*
	fm = document.createElement("iframe");
	fm.id = "iframe_pop";
	fm.style.width = "100%";
	fm.style.height = "100%";
	fm.allowTransparency = "true";
	fm.style.backgroundColor = "transparent";
	fm.frameBorder = "0";
	fm.style.margin = "0";
	*/
	fm = document.createElement('div');
    fm.id = "pop_wrap";
	layerdiv.appendChild(fm);
}
function showLayer(_w, _h, _src) {
	if (div == null) {
		coverScreen();
		//coverScreen("/public/payment/PC/back");
	}
	layerdiv.style.width = _w + 'px';
	layerdiv.style.height = _h + 'px';
	layerdiv.style.left = (parseInt(document.documentElement.clientWidth) / 2) - (parseInt(layerdiv.style.width) / 2) + 'px';
	layerdiv.style.top = ((parseInt(document.documentElement.clientHeight) / 2) + (parseInt(document.body.scrollTop + document.documentElement.scrollTop))) - (parseInt(_h) / 2) + 'px';
	//fm.src = _src;
    $('#'+fm.id).load(_src);
	div.style.display = "block";
	layerdiv.style.display = "block";
}
function hideLayer() {
	div.style.display = "none";
	layerdiv.style.display = "none";
	$(".pop_con_wrap").remove();
}
// e:iframe layer open
