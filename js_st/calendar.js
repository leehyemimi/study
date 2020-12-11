function fnGetClassName(NowDay){ //요일 클래스
	var className = "";
	if(NowDay === 0){
		className = "sun";
	}
	if(NowDay === 6){
		className = "sat";
	}
	return className;
}

function getFormatDate(date){ // 날짜포맷 yyyy-MM-dd 변환
	var year = date.getFullYear();
	var month = (1 + date.getMonth());
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return year + '-' + month + '-' + day;
}

class Calendar {
	constructor(nowDate,inputId) { //생성자 : class 인스턴스를 생성할때 초기화 하는 메소드
		this.inputId = inputId;
		this.nowDate = nowDate;
		this.today = new Date(this.nowDate);
		this.year = this.today.getFullYear(); //년도
		this.month = this.today.getMonth(); //월
		this.nowMonth = this.today.getMonth() + 1; //월
		this.date = this.today.getDate(); //일

		this.firstDate = new Date(this.year,this.month ,1); //첫째날
		this.firstDateDay = this.firstDate.getDay(); //첫째날 요일

		this.lastDate = new Date(this.year,this.month+1,0); //마지막날
		this.lastDate = this.lastDate.getDate(); //마지막날짜

		this.d = 1; //달력에 표시될 날짜
		this.trLength = Math.ceil((this.lastDate + this.firstDateDay) /7); //tr갯수 시작날짜 + 총 달 날짜*!/
		this.totalTd = this.trLength * 7;
		this.calendarId = 'calendar' + this.inputId.slice(-1);

		var _this = this;
		_this.CalendarClickOpen();
	}

	tableMake(nowDate){ //달력레이어 만들기
		var _this = this;

		_this.nowDate = nowDate;
		_this.today = new Date(_this.nowDate);
		_this.year = _this.today.getFullYear(); //년도
		_this.month = _this.today.getMonth(); //월
		_this.nowMonth = _this.today.getMonth() + 1; //월
		_this.date = _this.today.getDate(); //일

		_this.firstDate = new Date(_this.year,_this.month ,1); //첫째날
		_this.firstDateDay = _this.firstDate.getDay(); //첫째날 요일

		_this.lastDate = new Date(_this.year,_this.month+1,0); //마지막날
		_this.lastDate = _this.lastDate.getDate(); //마지막날짜

		_this.d = 1;

		var div = document.createElement("div");
		div.setAttribute("class","calendar_box");
		div.setAttribute("id",_this.calendarId);
		document.getElementById(_this.inputId).after(div);

		var monthBox =	'<p class="month">'+ _this.year + '년 ' + _this.nowMonth + '월<a href="javascript:;" class="close_btn"></a></p>' +
			'<table class="calendar"><colgroup><col width="14.2%" span="7"></colgroup><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>' +
			'<tr>';

		for(var j = 0 ; j < _this.totalTd ; j++) {
			var td = '<td></td>';


			if(j >= _this.firstDateDay && _this.d <= _this.lastDate){
				var day_date = new Date(_this.year,_this.month,_this.d),
					nowDay = day_date.getDay();//요일
				var _nowDate = getFormatDate(day_date),
					className = "",
					openTr = "",
					closeTr = "";

				//요일 클래스
				className = fnGetClassName(nowDay);
				//현재 날짜 클래스
				if(day_date.getDate() === _this.date){
					className = className + " bg";
				}

				//여는 tr 닫는 tr 처리
				if(nowDay === 0){
					openTr='<tr>';
				}
				if(nowDay === 6){
					closeTr='</tr>';
				}

				td = openTr + '<td class="'+className+'"><a href="javascript:;" data-date="'+_nowDate+'">'+_this.d+'</a></td>' + closeTr;


				_this.d++;
			}
			monthBox = monthBox + td;
		}
		monthBox = monthBox + '</tr></table>';
		document.getElementById(_this.calendarId).innerHTML  = monthBox;
		
		//날짜에 이벤트
		var tdTag = document.getElementById(_this.calendarId).getElementsByTagName("td");
		for(var i = 0 ; i < tdTag.length ; i++){
			var el = tdTag[i].getElementsByTagName("a");
			for(var h = 0 ; h < el.length ; h++){
				el[h].addEventListener("click", function(){
					document.getElementById(_this.inputId).setAttribute("value",this.getAttribute('data-date'));
					if(_this.DateOnClick !== undefined){ //달력레이어 닫기버튼 클릭시 이벤트
						_this.DateOnClick(this.getAttribute('data-date'));
					}

					_this.CalendarClickClose(); //달력레이어 닫기
				});
			}
		}

		var a_click = document.getElementById(_this.calendarId).getElementsByClassName('close_btn')[0];
		a_click.addEventListener("click", function(){
			_this.CalendarClickClose(); //달력레이어 닫기

			if(_this.CalendarCloseBtnClick !== undefined){ //달력레이어 닫기버튼 클릭시 이벤트
				_this.CalendarCloseBtnClick(_this.nowDate);
			}
		});
	}

	CalendarClickOpen() { //달력레이어 열기
		var _this = this;
		document.getElementById(_this.inputId).addEventListener("click", function(){
			if(this.getAttribute('class') !== "input_date active"){
				this.className += " active";
				_this.tableMake(this.value); //this.value
			}
		});
	}

	CalendarClickClose() { //달력레이어 닫기
		var _this = this;
		document.getElementById(_this.calendarId).remove();
		document.getElementById(_this.inputId).setAttribute("class","input_date");
	}

	set DataClick(str) {
		this.DateOnClick = str;
	}
	set CalendarCloseBtnClick(str){ //달력레이어 닫기버튼 클릭시 이벤트
		this.CalendarOnClickClose = str;
	}
}