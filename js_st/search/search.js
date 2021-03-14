class Search {
	constructor(input,ul) {
		this.ul = document.querySelector(ul);
		this.li = this.ul.getElementsByTagName("li");

		this.input = document.querySelector(input);
		this.currentIndex = 0;
		this.inputTxt = null; //input유저가 입력하는 값
	}
	init(){
		this.initEvent();
	}
	initEvent(){
		var _this = this;
		//자동완성리스트
		for(var i=0 ; i<_this.li.length; i++){
			_this.li[i].addEventListener("click", function () {
				_this.ActiveCon();
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
	
	InputActive(){ //input에 키보드입력시
		if(this.ul.className !== "on"){ //자동완성리스트 레이어열림
			this.ul.classList.add('on');
		}
		//방향키
		if(event.keyCode === 40){ //아래
			this.FocusView(this.li[0],this.li[0].innerText);
		}else if((64 < event.keyCode && event.keyCode < 91)){ //영문 + 국문 // ****국문해야함 모르겠음
			this.inputTxt = this.input.value;
		}
	}	
	ActiveCon(){ //자동완성리스트 show
		this.input.value = this.innerText;
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
}


/*
	* 남은기능
	1. input박스 한글입력
	2. 자동완성리스트 json으로 가져오기
	3. input박스 입력 문자랑 리스트 비교
*/