function fnGetClassName(NowDay){
	var className = "";
	if(NowDay === 0){
		className = "sun";
	}
	if(NowDay === 6){
		className = "sat";
	}
	return className;
}
function getFormatDate(date){
	var year = date.getFullYear();
	var month = (1 + date.getMonth());
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return year + '.' + month + '.' + day;
}

/*
// 실행순서
1. constructor 생성자 생성
2. create() 메서드 실행
3. CalendarClickOpen() 메서드 실행
4. constructor 생성자 매개변수중 url에 값이 있을경우 JsonUrl() 메서드 실행
5. Calendar에 삭제 버튼 클릭시 CalendarClickClose() 메서드 실행
*/

class Calendar {
	constructor(nowDate,inputId,url) { //생성자 생성 constructor('YYYY.MM.DD', 'input 아이디' , 'Jsonurl')
		this.inputId = inputId; //input 아이디

		this.nowDate = nowDate.split('.');
		this.nowDateY = this.nowDate[0]; //년
		this.nowDateM = this.nowDate[1]; //월
		this.nowDateD = this.nowDate[2]; //일
		this.today = new Date(this.nowDateY,this.nowDateM,this.nowDateD);
		this.nowDate = getFormatDate(this.today);  //날짜

		this.year = this.today.getFullYear(); //년
		this.month = this.today.getMonth(); //월
		this.nowMonth = this.today.getMonth() + 1; //월
		this.date = this.today.getDate(); //일

		this.firstDate = new Date(this.year,this.month ,1);
		this.firstDateDay = this.firstDate.getDay(); //시작하는요일
		this.lastDate = new Date(this.year,this.month+1,0);
		this.lastDate = this.lastDate.getDate(); //끝나는날짜
		this.d = 1;

		this.trLength = Math.ceil((this.lastDate + this.firstDateDay)/7); //tr갯수
		this.totalTd = this.trLength * 7; //td갯수
		this.calendarId = 'calendar' + this.inputId.slice(-1); //calendar id

		// Json
		this.url = url; //Json url
		this.newContent = [];
		this.newContentTodo = [];
		this.newContentHoliyday = [];
		this.todo = "";

		var _this = this;
		_this.create(nowDate); 
		document.getElementById(_this.inputId).addEventListener("click", function() {
			_this.CalendarClickOpen();
		});
	}

	create(nowDate){
		var _this = this;
		var selectNow = document.getElementById(_this.inputId).value,
			selectNowDay = selectNow.split('.'),
			selectNowDayY = selectNowDay[0],
			selectNowDayM = selectNowDay[1],
			selectNowDayD = selectNowDay[2],
			selectDay = new Date(selectNowDayY, selectNowDayM - 1, selectNowDayD),
			selectYear = selectDay.getFullYear(),
			selectMonth = selectDay.getMonth() + 1,
			selectDate = selectDay.getDate();

		_this.nowDate = nowDate;
		_this.nowDate = _this.nowDate.split('.');
		_this.nowDateY = _this.nowDate[0];
		_this.nowDateM = _this.nowDate[1];
		_this.nowDateD = _this.nowDate[2];
		_this.today = new Date(_this.nowDateY, _this.nowDateM - 1, _this.nowDateD);

		_this.year = _this.today.getFullYear();
		_this.month = _this.today.getMonth();
		_this.nowMonth = _this.today.getMonth() + 1;
		_this.date = _this.today.getDate();
		_this.today = new Date(_this.year, _this.month, _this.date);

		_this.firstDate = new Date(_this.year, _this.month, 1);
		_this.firstDateDay = _this.firstDate.getDay();
		_this.lastDate = new Date(_this.year, _this.month + 1, 0);
		_this.lastDate = _this.lastDate.getDate();
		_this.d = 1;

		_this.trLength = Math.ceil((_this.lastDate + _this.firstDateDay) / 7);
		_this.totalTd = _this.trLength * 7;
		_this.calendarId = 'calendar' + _this.inputId.slice(-1);

		var div = document.createElement("div");
		div.setAttribute("class", "calendar_box");
		div.setAttribute("id", _this.calendarId);
		document.getElementById(_this.inputId).after(div);

		var monthBox = '<p class="month"><a href="javascript:;" class="prev_btn"></a>' +
			_this.year + '년 ' + _this.nowMonth + '월<a href="javascript:;" class="close_btn"></a><a href="javascript:;" class="next_btn"></a>' +
			'</p>' +
			'<table class="calendar"><colgroup><col width="14.2%" span="7"></colgroup><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>' +
			'<tr>';

		for(var j = 0; j < _this.totalTd; j++) {
			var td = '<td></td>';

			if (j >= _this.firstDateDay && _this.d <= _this.lastDate) {
				var day_date = new Date(_this.year, _this.month, _this.d),
					nowDay = day_date.getDay(),
					_nowDate = getFormatDate(day_date),
					className = "",
					openTr = "",
					closeTr = "";

				//날짜의 수만큼 루프를 돌면서 외부에서 정의한 메소드 호출
				if (_this.OnMethod !== undefined) {
					_this.OnMethod(_this.d);
				}

				className = fnGetClassName(nowDay); //class

				if (selectYear === _this.year && selectMonth === _this.nowMonth) { //현재 날짜
					if (day_date.getDate() === selectDate) {
						className = className + " bg";
					}
				}
				if (nowDay === 0) { //tr 여는 태그
					openTr = '<tr>';
				}

				if (nowDay === 6) { //tr 닫는 태그
					closeTr = '</tr>';
					closeTr = '</tr>';
				}

				//td 만들기
				td = openTr + '<td class="' + className + '"><a href="javascript:;" data-date="' + _nowDate + '">' + _this.d + '<span id="'+  _this.d +'"></span></a></td>' + closeTr;
				_this.d++;
			}
			monthBox = monthBox + td;
		}
		monthBox = monthBox + '</tr></table>';
		document.getElementById(_this.calendarId).innerHTML = monthBox;

		if(_this.url) { //JSon 호출
			_this.JsonUrl(_this.url).then(function(responseObject) {
				for(var a = 0; a < _this.lastDate; a++){
					var span = document.getElementById(_this.calendarId).getElementsByTagName("span");
					var spanId = span[a].getAttribute("id");
					for (var i = 0; i < responseObject.TodoList.length; i++) {
						var todoDay = responseObject.TodoList[i].date.split('.'),
							todoDayY = parseInt(todoDay[0]),
							todoDayM = parseInt(todoDay[1]),
							todoDayD = parseInt(todoDay[2]);
						if(todoDayY === _this.year && todoDayM === _this.nowMonth && spanId === String(todoDayD)) {
							if(responseObject.TodoList[i].holiyday === "holiyday") {
								span[a].parentNode.parentNode.className += " holiy";
							}
							_this.todo = responseObject.TodoList[i].dateTodo;
							span[a].innerHTML = _this.todo;
						}
					}
				}
			});
		}

		//날짜클릭시
		var tdTag = document.getElementById(_this.calendarId).getElementsByTagName("td");
		for (var i = 0; i < tdTag.length; i++) {
			var el = tdTag[i].getElementsByTagName("a");
			for (var h = 0; h < el.length; h++) {
				el[h].addEventListener("click", function () {
					document.getElementById(_this.inputId).setAttribute("value", this.getAttribute('data-date'));
					if (_this.DateOnClick !== undefined) {
						_this.DateOnClick(this.getAttribute('data-date'));
					}
					_this.CalendarClickClose();//닫기버튼클릭시
				});
			}
		}
		//이전달버튼클릭시
		var prev_btn = document.getElementById(_this.calendarId).getElementsByClassName('prev_btn')[0];
		prev_btn.addEventListener("click", function () {
			_this.CalendarClickClose();
			_this.create(getFormatDate(new Date(_this.year, _this.month - 1, 1)));
			document.getElementById(_this.calendarId).className += " on";
			if (document.getElementById(_this.inputId).getAttribute('class') !== "input_date active") {
				document.getElementById(_this.inputId).className += " active";
			}
		});
		//다음달버튼클릭시
		var next_btn = document.getElementById(_this.calendarId).getElementsByClassName('next_btn')[0];
		next_btn.addEventListener("click", function () {
			_this.CalendarClickClose();
			_this.create(getFormatDate(new Date(_this.year, _this.month + 1, 1)));
			document.getElementById(_this.calendarId).className += " on";
			if (document.getElementById(_this.inputId).getAttribute('class') !== "input_date active") {
				document.getElementById(_this.inputId).className += " active";
			}
		});
		//닫기버튼클릭시
		var close_btn = document.getElementById(_this.calendarId).getElementsByClassName('close_btn')[0];
		close_btn.addEventListener("click", function () {
			_this.CalendarClickClose();
			if (_this.CalendarCloseBtnOnClick !== undefined) {
				_this.CalendarCloseBtnOnClick(_this.nowDate);
			}
		});
	}

	JsonUrl(url){ 	//JSon
		return new Promise(function (resolve, reject) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject({
						status: this.status,
						statusText: xhr.statusText
					});
				}
			};
			xhr.send();
		});
	}

	CalendarClickOpen() { //달력 열기
		var _this = this;
		if(this.getAttribute('class') !== "input_date active"){
			var inputDate = this.value;
			inputDate = inputDate.split('.');
			var inputDateY = inputDate[0];
			var inputDateM = inputDate[1];
			var inputDateD = inputDate[2];
			var inputDateDay = new Date(inputDateY, inputDateM - 1, inputDateD);

			if(inputDateDay  != 'Invalid Date' ){
				this.className += " active";
				if(document.getElementById(_this.calendarId) === null){
					_this.create(this.value);
				}
				document.getElementById(_this.calendarId).className += " on";

			}else{
				alert('날짜를 형식에 맞게 넣어주세요.');
			}
		}
	}

	CalendarClickClose() { //달력 닫기
		var _this = this;
		document.getElementById(_this.calendarId).remove();
		document.getElementById(_this.inputId).setAttribute("class","input_date");
	}

	set OnDateClick(event) { //날짜클릭시 이벤트
		this.DateOnClick = event;
	}
	set OnCalendarCloseClick(event){ //닫기버튼 이벤트
		this.CalendarCloseBtnOnClick = event;
	}
	//날짜의 수만큼 루프를 돌면서 외부에서 정의한 메소드 호출
	set Method(obj){ //Json
		this.OnMethod = obj;
	}
}