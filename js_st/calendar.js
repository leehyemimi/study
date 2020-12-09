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

class Calendar {
	constructor(now_date,inputid) { //생성자 : class 인스턴스를 생성할때 초기화 하는 메소드
		this.inputid = inputid;
		this.now_date = now_date;
		this.today = new Date(this.now_date);
		this.year = this.today.getFullYear(); //년도
		this.month = this.today.getMonth(); //월
		this.now_month = this.today.getMonth() + 1; //월
		this.date = this.today.getDate(); //일

		this.first_date = new Date(this.year,this.month ,1); //첫째날
		this.first_date_day = this.first_date.getDay(); //첫째날 요일

		this.last_date = new Date(this.year,this.month+1,0); //마지막날
		//this.last_date_day = this.last_date.getDay(); //마지막날 요일
		this.last_date = this.last_date.getDate(); //마지막날짜

		this.d = 1; //달력에 표시될 날짜
		this.tr_length = Math.ceil((this.last_date + this.first_date_day) /7); //tr갯수 시작날짜 + 총 달 날짜*!/
		this.total_td = this.tr_length * 7;
	}

	set DataClick(str) {
		this.DateOnClick = str;
	}

	tableMake(){
		var calendarId = 'calendar' + this.inputid.slice(-1);
		var DataClick = this.DateOnClick;
		var div = document.createElement("div");
		div.setAttribute("class","calendar_box");
		div.setAttribute("id",calendarId);
		document.getElementById(this.inputid).after(div);

		var month_box =	'<p class="month">'+ this.year + '년 ' + this.now_month + '월</p>' +
			'<table class="calendar"><colgroup><col width="14.2%" span="7"></colgroup><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>' +
			'<tr>';

		for(var j = 0 ; j < this.total_td ; j++) {
			var td = '<td></td>';

			if(j >= this.first_date_day && this.d <= this.last_date){
				var day_date = new Date(this.year,this.month,this.d),
					now_day = day_date.getDay(),//요일
					_now_date = this.year + "-" + (this.month+1) + "-" + this.d,
					class_name = "",
					open_tr = "",
					close_tr = "";

				//요일 클래스
				class_name = fnGetClassName(now_day);
				//현재 날짜 클래스
				if(day_date.getDate() === this.date){
					class_name = class_name + " bg";
				}

				//여는 tr 닫는 tr 처리
				if(now_day === 0){
					open_tr='<tr>';
				}
				if(now_day === 6){
					close_tr='</tr>';
				}

				td = open_tr + '<td class="'+class_name+'"><a href="javascript:;" id="'+_now_date+'">'+this.d+'</a></td>' + close_tr;
				this.d++;
			}
			month_box = month_box + td;
		}
		month_box = month_box + '</tr></table>';
		document.getElementById(calendarId).innerHTML  = month_box;

		var el = document.getElementById(calendarId).getElementsByTagName("a");
		for(var i = 0 ; i < el.length ; i++){
			el[i].addEventListener("click", function(){DataClick(this.id)});
		}
	}
}