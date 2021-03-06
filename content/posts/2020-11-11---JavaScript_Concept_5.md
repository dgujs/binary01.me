---
title: JavaScript 핵심 개념 정리 - Class
date: "2020-11-11T23:46:37.121Z"
template: "post"
draft: false
slug: "JavaScript_Concept_5"
category: "JavaScript"
tags:
  - "JavaScript"
  - "Class"

description: "드디어 JavaScript 핵심 개념 정리의 마지막 포스팅이다! 이번 시간에는 Class에 대해 알아보자!"
---

<br/>

드디어 JavaScript 핵심 개념 정리의 마지막 포스팅이다! 이번 시간에는 Class에 대해 알아보자!<br/>

---

## Class

Class란 무엇일까? 그림과 함께 한 줄로 간단히 설명해보겠다!

<img src= "/categoryImage/JavaScript/class_1.png" width="500px"><br/>

공통적인 속성을 지니고 구체적인 대상을 instance라고 하며,
이 instance들의 공통적인 속성을 모은 추상적인 개념이 Class이다.

<img src= "/categoryImage/JavaScript/class_2.png" width="500px"><br/>

instance의 개별적인 동작이 아니라 공통적인 판단을 필요로 하는 경우에 static methods, static properties를 사용한다.<br/>

또한, instance에서는 (prototype) methods에 바로 접근이 가능하지만 static methods, static properties는 바로 접근이 불가능하다.<br/>

**예제**
```javascript
function Person(name, age) {
  this._name = name;
  this._age = age;
}

// static method
Person.getInfomations = function(instance) {
  return {
    name : instance._name,
    age : instance._age
  };
}

// prototype method
Person.prototype.getName = function() {
  return this._name;
}

// prototype method
Person.prototype.getAge = function() {
  return this._age;
}

const jinsoo = new Person('진수', 28);
console.log(jinsoo.getName()); //진수
console.log(jinsoo.getAge()); //28

console.log(jinsoo.getInfomations(jinsoo)); //error
console.log(Person.getInfomations(jinsoo)); //진수, 28
```

위의 예제에서 Person 함수의 생성자와 new 연산자로 `jinsoo`을 만들었다.<br/>
`console.log`를 찍어보며 prototype method와 static method의 차이를 확인해보자!<br/>

(강의에서는 ES6 이전의 문법을 다루어 나도 똑같이 class를 사용하지 않고 함수로 클래스를 만들었다.)<br/>

---

### Class 상속

아래의 두 개 Class가 겹치는 메소드들이 있다고 해보자.
- Person Class
    * getName
    * getAge

- Employee Class
    * getName
    * getAge
    * getPosition

객체지향을 아는 분들이라면 누구나 위와 같은 문제를 상속을 통해 해결할 것이다!<br/>
JavaScript ES6 이전 문법에서는 아래와 같이 작성할 수 있다.

```js
function Person(name, age) {
	this._name = name;
	this._age = age;
}

// prototype method
Person.prototype.getName = function () {
	return this._name;
}

// prototype method
Person.prototype.getAge = function () {
	return this._age;
}

function Employee(name, age, position) {
	this._name = name;
	this._age = age;
	this._position = position;
}

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function () {
	return this._position;
}

const jinsoo = new Employee('js', 28, 'dev');
```

JavaScript 핵심 개념 정리 -4에서 공부한 prototype chaining을 활용하여 작성한 결과이다.<br/>
하지만 위 코드에는 약간의 문제가 있어 보인다.<br/>

<img src= "/categoryImage/JavaScript/class_3.png" width="500px"><br/>

형광펜으로 칠한 정보들이 Employee의 prototype에 담겨있는 것이 마음에 들지 않는다..! 😐😐<br/>

위 그림에 칠해진 name과 age property는 Person 생성자를 호출하며 prototype chaining으로 가져온 정보들인데 어떻게 처리하면 좋을까??<br/>

우리는 Person의 prototype method가 필요한 것이지 Person의 property 필요한 것은 아니다.<br/>

그러면, 아래 그림과 같이 Class를 사이에 하나 두고 Person의 prototype만 상속받으면 되지 않을까?

<img src= "/categoryImage/JavaScript/class_4.png" width="500px"><br/>

위 그림을 코드로 변환한 결과는 아래와 같다.

```javascript
function Person(name, age) {
	this._name = name;
	this._age = age;
}

// prototype method
Person.prototype.getName = function () {
	return this._name;
}

// prototype method
Person.prototype.getAge = function () {
	return this._age;
}

function Employee(name, age, position) {
	this._name = name;
	this._age = age;
	this._position = position;
}

function Bridge() {}
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

Employee.prototype.getPosition = function () {
	return this._position;
}
```

위 코드로 Employee jinsoo instance를 생성하고 ```console.dir```로 jinsoo를 관찰하면 이쁜 결과를 넣었음을 확인할 수 있다.<br/>

어떤 유명한 개발자는 이 패턴을 아래처럼 함수화시켜 사용할 것을 추천한다.<br/>

```javascript
const extendClass = (function() {
  function Bridge() {}
  return function(Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
  }
})();

extendClass(Person, Employee);
Employee.prototype.getPosition = function () {
	return this._position;
}
```

위와 같이 Closure를 활용해서 Bridge 생성자는 계속 재활용하게끔 한다.<br/>
사실 예제의 Class Person과 Employee와 같은 상속관계에서는 property 또한 많이 상속되도록 한다.<br/>

property도 상속할 수 있는 모든 코드는 아래에 적어놓겠다.

```javascript
const extendClass = (function() {
  function Bridge() {}
  return function(Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent;
  }
})();

function Person(name, age) {
	this._name = name;
	this._age = age;
}

// prototype method
Person.prototype.getName = function () {
	return this._name;
}

// prototype method
Person.prototype.getAge = function () {
	return this._age;
}

function Employee(name, age, position) {
	this.superClass(name, age);
	this._position = position;
}

extendClass(Person, Employee);
Employee.prototype.getPosition = function () {
	return this._position;
}
```
superClass 메소드를 추가하여 property를 상속받을 수 있게 하였다.<br/>
코드를 보고 열심히 고민해보자! 🤔🤔

---

### 마무리

<br/>

공부한 강의가 ES6 이전의 문법을 다루어 내용이 쫌 쉽지 않았을뿐더러, 지금 JS로 코딩할 때는 쓰지 않는 문법 등이 많이 나왔던 것 같다.<br/>

하지만 Class와 상속을 구현해보며 하게 되는 고민이 나뿐만 아니라 내 글을 읽어주시는 분들에게도 도움이 될 거 같아 포스팅에도 올렸다.<br/>

---

본 포스팅은 인프런 강의 **Javascript 핵심 개념 알아보기 - JS Flow**를 공부하며 정리한 포스팅입니다!
