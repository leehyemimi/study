//요일 클래스
function fnGetClassName(_now_day){
	var class_name = "";
	if(_now_day === 0){
		class_name = "sun";
	}
	if(_now_day === 6){
		class_name = "sat";
	}
	return class_name;
}

//달력생성
function fnCalendar(now_date,method){
	var today = new Date(now_date),
		year = today.getFullYear(), //년도
		month = today.getMonth(), //월
		now_month = today.getMonth() + 1, //월
		date = today.getDate(), //일

		first_date = new Date(year,month ,1), //첫째날
		first_date_day = first_date.getDay(), //첫째날 요일

		last_date = new Date(year,month+1,0), //마지막날
		last_date_day = last_date.getDay(), //마지막날 요일
		last_date = last_date.getDate(), //마지막날짜

		d = 1, //달력에 표시될 날짜
		tr_length = Math.ceil((last_date + first_date_day) /7), //tr갯수 시작날짜 + 총 달 날짜*/
		total_td = tr_length * 7;

	var month_box =	'<p class="month">'+ year + '년 ' + now_month + '월</p>' +
		'<table class="calendar"><colgroup><col width="14.2%" span="7"></colgroup><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>' +
		'<tr>';

	for(var j = 0 ; j < total_td ; j++) {
		var td = '<td></td>';

		if(j >= first_date_day && d <= last_date){
			var day_date = new Date(year,month,d),
				now_day = day_date.getDay(),//요일
				_now_date = year + "-" + (month+1) + "-" + d,
				class_name = "",
				open_tr = "",
				close_tr = "";

			//요일 클래스
			class_name = fnGetClassName(now_day);
			//현재 날짜 클래스
			if(day_date.getDate() === date){
				class_name = class_name + " bg";
			}

			//여는 tr 닫는 tr 처리
			if(now_day === 0){
				open_tr='<tr>';
			}
			if(now_day === 6){
				close_tr='</tr>';
			}

			td = open_tr + '<td class="'+class_name+'"><a href="javascript:;" id="'+_now_date+'">'+d+'</a></td>' + close_tr;
			d++;
		}
		month_box = month_box + td;
	}
	month_box = month_box + '</tr></table>';
	document.getElementById("calendar").innerHTML  = month_box;

	var el = document.getElementsByTagName("a");
	for(var i = 0 ; i < el.length ; i++){
		el[i].addEventListener("click", function(){method(this.id)});
	}
}