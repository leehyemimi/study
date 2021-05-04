# 자바스크립트를 깨우치다 



## 1장. 자바스크립트 객체 

#### 객체 만들기

|          속성          |           속성값            |
| :--------------------: | :-------------------------: |
|    살아있음(living)    |          참(true)           |
|       나이(age)        |             33              |
|      성별(gender)      |         남성(male)          |
| 성별 구하기(getGender) | 성별(gender)값 반환(return) |

```javascript
<!DOCTYPE html><html><meta charset="utf-8"><body>
<script>
    
    // cody 객체 만들기
    var cody = new Object();

    // cody 객체를 속성으로 채우기 (점 표기법 사용)
	cody.living = true;
	cody.age = 33;
	cody.gender = 'male';
    cody.getGender = function(){
        return cody.gender;
    };
	console.log(cody); // 객체를 로그에 출력 {living: true, age: 33, gender: "male"}
	console.log(cody.getGender()); // 'male'이 출력된다.

</script>
</body></html>
```

```javascript
var myObject = new Object(); //Object() 객체 만들기
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';

console.log(myObject); // Object {0: "f", 1: "o", 2: "o"}

var MyString = new String('foo');

console.log(MyString); // foo {0: "f", 1: "o", 2: "o"}
```

```javascript 
//Person() 객체를 만들기 위해 Person 생성자 함수를 정의한다.
var Person = function(living,age,gender){
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function(){
        return this.gender;
    };
};

//Person 객체의 인스턴스를 만들고 cody라는 변수에 지정한다.
var cody = new Person(true,33,'male');

console.log(cody); //Person {living: true, age: 33, gender: "male", getGender: ƒ}

var myString = new  String('foo');

console.log(myString);
```

```javascript
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function(){
    return codyA.gender;
};
console.log(codyA); //Object {living: true, age: 33, gender: "male", getGender: ƒ}

var Person = function(living,age,gender){
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function(){
        return this.gender;
    };
};
var codyB = new Person(true,33,'male');
console.log(codyB); //Object {living: true, age: 33, gender: "male", getGender: ƒ}
```



#### 자바스크립트 생성자는 객체 인스턴스를 생성하고 반환한다

```javascript
// Person은 생성자 함수이며, new 키워드와 함께 사용하도록 만들어졌다
var Person = function(living,age,gender){
    // 아래에서 'this'는 새롭게 작성된 객체(this = new Object();)를 뜻한다.
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function(){
        return this.gender;
    };
    //new 키워드와 함께 생성자 함수를 호출하면 undefind 대신 'this'가 반환된다.
};

//Person 객체의
```

