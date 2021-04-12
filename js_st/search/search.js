class Search {
	constructor(input,ul,url) {
		var _this = this;
		this.ul = document.querySelector(ul);
		this.li = this.ul.getElementsByTagName("li");

		this.input = document.querySelector(input);
		this.currentIndex = 0;
		this.inputTxt = null; //input유저가 입력하는 값

		this.url = url;
		_this.create(url);
	}
	init(){
		this.initEvent();
	}
	initEvent(){
		var _this = this;
		//자동완성리스트
		for(var i=0 ; i<_this.li.length; i++){
			_this.li[i].addEventListener("click", function () {
				_this.ActiveCon(this);
			});
			_this.li[i].addEventListener("keyup", function () {
				_this.SelectItem();
			});
		}
		//input
		_this.input.addEventListener("keyup", function () {
			_this.InputActive();
		});
	}
<<<<<<< HEAD
	create(url){
		var _this = this;
		var ul = _this.ul;
		var li = document.createElement('li');
		var li_list = "";

		_this.JsonUrl(this.url).then(function(responseObject) {
			for(var i = 0; i < responseObject.searchList.length; i++){
				li.setAttribute("tabindex",-1);
				li.innerHTML = responseObject.searchList[i].date;
				li_list = li_list + li;
				console.log(li);
			}
		});

		ul.append(li_list);
	}


	/*var span = document.getElementById(_this.calendarId).getElementsByTagName("span");
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
	}*/
	//}
=======
>>>>>>> c3e8cc7e5eae81edd89b957d3bad8fc227ac9c56

	InputActive(){ //input에 키보드입력시
		/*function onlyNumberKey(keyCode) {
			return /[]|\./.test(String.fromCharCode(keyCode))
		}
		var isNumberKey = onlyNumberKey(event.keyCode);
		console.log(isNumberKey);*/

		//event.keyCode<48||(event.keyCode>57&&event.keyCode<96)||event.keyCode>105
		//방향키
		if(event.keyCode === 40){ //아래
			this.FocusView(this.li[0],this.li[0].innerText);
		}else if((keycode < 48 || keycode >57) && (keycode < 65 || keycode > 90) && (keycode < 97 || keycode > 122)){ //숫자
			if(this.ul.className !== "on"){ //자동완성리스트 레이어열림
				this.ul.classList.add('on');
			}
			this.inputTxt = this.input.value;
		}
	}
	ActiveCon(li){ //자동완성리스트 show
		this.input.value = li.innerText;
		this.ul.classList.remove('on');
	}
	SelectItem(){ //자동완성리스트 선택
		if(event.keyCode === 40){ //down
			if(this.currentIndex < this.li.length-1){
				this.currentIndex = this.currentIndex + 1;
				this.FocusView(this.li[this.currentIndex],this.li[this.currentIndex].innerText);
			}else{ //마지막
				this.FocusView(this.input,this.inputTxt); //원래 입력된 문자
				this.currentIndex = 0;
			}
		}else if(event.keyCode === 38) { //up
			if(this.currentIndex > 0){
				this.currentIndex = this.currentIndex - 1;
				this.FocusView(this.li[this.currentIndex],this.li[this.currentIndex].innerText);
			}else{ //첫번째
				this.FocusView(this.input,this.inputTxt); //원래 입력된 문자
			}
		}else if(event.keyCode === 13){ //enter
			this.ul.classList.remove('on');
			this.FocusView(this.input,this.li[this.currentIndex].innerText);
			this.currentIndex = 0;
		}
	}
	FocusView(focus,inputText){ //포커스 및 input값 변경
		focus.focus();
		this.input.value = inputText;
	}
	JsonUrl(url){ //Json
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
}


/*
	* 남은기능
	1. input박스 한글입력
	2. 자동완성리스트 json으로 가져오기
	3. input박스 입력 문자랑 리스트 비교
*/