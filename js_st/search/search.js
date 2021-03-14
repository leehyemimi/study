class Search {
	constructor(input,ul) {
		this.ul = document.querySelector(ul);
		this.li = this.ul.getElementsByTagName("li");
		this.currentIndex = 0;
		this.inputTxt = null; //input유저가 입력하는 값
		this.input = document.querySelector(input);
	}
	init(){
		this.initEvent();
	}
	initEvent(){
		var _this = this;
		//li_list
		for(var i=0 ; i< _this.li.length; i++){
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

	//input
	InputActive(){
		if(this.ul.className !== "on"){ //레이어열림
			this.ul.classList.add('on');
		}
		//방향키 위아래
		if(event.keyCode === 40){ //아래
			this.FocusView(this.li[0],this.li[0].innerText);
		}else if((64 < event.keyCode && event.keyCode < 91)){ //영문 + 국문 // ****국문해야함 모르겠음
			this.inputTxt = this.input.value;
		}
	}
	ActiveCon(){
		this.input.value = this.innerText;
		this.ul.classList.remove('on');
	}
	SelectItem(){
		if(event.keyCode === 40){ //아래
			if(this.currentIndex < this.li.length-1){
				this.currentIndex = this.currentIndex + 1;
				this.FocusView(this.li[this.currentIndex],this.li[this.currentIndex].innerText);
			}else{
				this.FocusView(this.input,this.inputTxt);//원래 문자
				this.currentIndex = 0;
			}
		}else if(event.keyCode === 38) { //위
			if(this.currentIndex > 0){
				this.currentIndex = this.currentIndex - 1;
				this.FocusView(this.li[this.currentIndex],this.li[this.currentIndex].innerText);
			}else{ //첫번째
				this.FocusView(this.input,this.inputTxt);//원래 문자
			}
		}else if(event.keyCode === 13){ //엔터
			this.ul.classList.remove('on');
			this.FocusView(this.input,this.li[this.currentIndex].innerText);
			this.currentIndex = 0;
		}
	}

	FocusView(focus,inputText){
		focus.focus();
		this.input.value =inputText;
	}
}