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
    this.living = living;
    this.age = age;
    this.gender = gender;
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
    this.living = living;
    this.age = age;
    this.gender = gender;
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
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function(){
        return this.gender;
    };
    //new 키워드와 함께 생성자 함수를 호출하면 undefind 대신 'this'가 반환된다.
};

//Person 객체의 인스턴스를 만들어 cody에 저장한다.
var cody = new Person(true,33,'male');

//cody는 Person()의 객체이자 인스턴스다.
console.log(typeof cody); //object 
console.log(cody); //Person {living: true, age: 33, gender: "male", getGender: ƒ}
console.log(cody.constructor); 
/*function(living,age,gender){
    // 아래에서 'this'는 새롭게 작성된 객체(this = new Object();)를 뜻한다.
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function(){
        return this.gender;
    };
    //new 키워드와 함께 생성자 함수를 호출하면 undefind 대신 'this'가 반환된다.
};*/

```

#### 자바스크립트 네이티브 / 내장 객체 생성자

> Number()
>
> String()
>
> Boolean()
>
> Object()
>
> Array()
>
> Function()
>
> Date()
>
> RegExp()
>
> Error()



#### 사용자 정의 객체 생성자 함수

```javascript
var Person = function(living,age,gender){
    this.living = true;
    this.age = age;
    this.gender = 'male';
    this.getGender = function(){
        return this.gender;
    };
};

var cody = new Person(true,33,'male');
console.log(cody); //Person {living: true, age: 33, gender: "male", getGender: ƒ}

var lisa = new Person(true,34,'female');
console.log(lisa); //Person {living: true, age: 34, gender: "male", getGender: ƒ}
```



#### new 연산자를 사용한 생성자 인스턴스 생성

```javascript
//new 키워드를 사용한 각 네이티브 생성자의 인스턴스 생성

var MyNumber = new Number(23);
var MyNumberLiteral = 23;// 객체아님 

var MyString = new String('male');
var MyStringLiteral = 'male';// 객체아님 

var MyBoolean = new Boolean(false);
var MyBooleanLiteral = false;// 객체아님 

var MyObject = new Object();
var MyObjectLiteral = {};

var MyArray = new Array('foo','bar');
var MyArrayLiteral = ['foo','bar'];

//var MyFunction = new Function("x","y","return x*y");
//var MyFunctionLiteral = function(x,y) {return x*y"};
                                    
var MyDate = new Date();                                               
var MyError = new Error('Crap!');
                                       
var MyRegExp = new RegExp('\bt[a-z]+\b');                                       
var MyRegExpLiteral = /\bt[a-z]+\b/;

console.log(MyNumberLiteral.constructor,MyNumber.constructor);
console.log(MyStringLiteral.constructor,MyString.constructor);
console.log(MyBooleanLiteral.constructor,MyBoolean.constructor);
console.log(MyObjectLiteral.constructor,MyObject.constructor);
console.log(MyArrayLiteral.constructor,MyArray.constructor);
console.log(MyRegExpLiteral.constructor,MyRegExp.constructor);
console.log(MyDate.constructor);
console.log(MyError.constructor);
```



#### 원시값 (=단순값)

```javascript
var myString = 'string';
var myNumber = 10;
var myBoolean = 'false';
var myNull = null;
var myUndefined = undefined;

console.log(myString,myNumber,myBoolean,myNull,myUndefined);

//배열이나 객체와 같은 복합 객체는 여러 원시값으로 구성할 수 있으므로 이처럼 다양한 값의 복합체가 될수 있다.

var myObject = {
 myString : 'string',
 myNumber : 10,
 myBoolean : 'false',
 myNull : null,
 myUndefined : undefined
}

console.log(myObject);

var myArray = ['string' ,10 ,false ,null ,undefined];

console.log(myArray);
```

#### 원시값 null,undefined,"string",10,true,false는 객체가 아니다

```javascript

```



#### 원시값은 어떻게 저장/복사되는가

원시값은 액면가 그대로 저장되고 관리된다

```javascript
var myString = 'foo'//원시 문자열 객체를 만든다.
var myStringCopy = myString; //값을 새 변수로 복사한다.

var myString = null; //myString 변수에 저장된 값을 수정한다.

console.log(myString,myStringCopy); //null "foo"
```



#### 원시값은 값 자체를 비교한다

```javascript
var price1 = 10;
var price2 = 10;
var price3 = new Number('10');
var price4 = price3;

console.log(price1 === price2); //true

console.log(price1 === price3); //false

console.log(price4 === price3); //true

var price4 = 10;

console.log(price4 === price3); //false

```



#### 복합객체 (=합성객체)

```javascript
var Object = {
 myString : 'string',
 myNumber : 10,
 myBoolean : 'false',
 myNull : null,
 myUndefined : undefined
}

var array = ['string' ,10 ,false ,null ,undefined];

// 이 값을 아래에 있는 원시값의 단순함과 비교해 보자. 위에서 보는 복합 객체는 여러 값을 포함 할수 있지만, 아래에 있는 원시값은 무엇도 지금보다 더 복합적으로 만들수 없다

var myString = 'string';
var myNumber = 10;
var myBoolean = 'false';
var myNull = null;
var myUndefined = undefined;
```



#### 복합객체는 어떻게 저장.복사되는가

복합 객체가 참조에 의해 저장되고 조작된다는 것은 반드시 이해하고 가야할 매우 중요한 사실

```javascript
var myObject = {}

var copyOffMyObject = myObject; //값이 아닌 참조만 복사

myObject.foo = 'bar'; //myObject에 저장된 값을 수정한다.

console.log(myObject,copyOffMyObject); // Object {foo: "bar"}
```



#### 복합 객체는 참조를 비교한다

```javascript
var objectFoo = {name:'name'}
var objectBar = {name:'name'}

// 자바스크립트에 두 객체가 동등한지 같은 자료형인지는 중요하지 않다.
console.log(objectFoo === objectBar ); //false

var objectA = {foo : 'bar'}
var objectB = objectA

// 두변수가 같은 객체를 참조하고 있음
console.log(objectA === objectB); //true
```



#### 복합 객체는 동적 속성을 포함한다 

```javascript

```



#### typeof 연산자

```javascript
var myNull = null;
var myUndefind = undefind;
```



#### 동적 속성 덕분에 객체 수성이 가능하다

```javascript

```



#### 생성자 인스턴스에는 자신의 생성자 함수를 가리키는 속성이 있다

```javascript

```



#### 객체가 특정 생성자 함수의 인스턴스인지 확인하기

```javascript

```



#### 생성자를 통해 만든 인스턴스에 인스턴스 속성 추가하기

```javascript

```



#### "자바스크립트 객체"와 "Obhect() 객체"의 의미

```javascript

```

