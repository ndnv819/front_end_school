// 객체지향

// 1. 모듈 패턴 - 값을 은닉할 수 있다.
function person() { // 일반 함수 (new 키워드 단 생성자 함수 아님)
    let age = 35; // 은닉할 값, 근데 은닉하고 보니까 밖에서 쓰고 싶음. 함수 스코프라서 밖에서 못쓰니까 person 함수 밖으로 빼고 싶다. 지역, 클로저 공간

    return { // return을 통해서 값을 빼낸다. 
        getAge: function() {return age}, // 폐쇄된 공간에 접근할 수 있는 함수 = 클로저 함수
        setAge: function(data) {age = data}
    }
}

// 2. 사용자 정의 타입 패턴 
function personType() { // 인스턴스를 만들기 위한 함수, 붕어빵 
    this.age = 35; 
}

personType.prototype.getAge = function() {
    return this.age // 여기서 this는 instanceperson을 가리킨다.
}

const instanceperson = new personType(); // new라는 키워드를 붙여서 생성자 함수 function personType(). personType.prototype.getAge = function()에 사용한 this를 인스턴스를 가리키게 만듦. 원래 자신을 호출한 객체를 가리킴. 

console.log(instanceperson.getAge());

// 3. 모듈 + 사용자 정의 타입 

// function PersonType2() {
//     let age = 25; // 은닉할 데이터 

//     function innerPersonType() // 함수를 빼내기 위해 만듦 

//     innerPersonType.prototype.getAge = function() { // age에 접근할 수 있는 클로저 함수 // 인스턴스도 함수를 사용할 수 있게 
//         return age;
//     }

//     return innerPersonType; // 함수를 빼냄 
// }

// const Person3 = PersonType2();
// const person3 = new Person3();
// console.log(person3.getAge());

// IIFE 패턴으로 만들어보기 
const PersonType3 = (function () {
    let age = 25; // 은닉할 데이터 

    function innerPersonType() // 함수를 빼내기 위해 만듦 

    innerPersonType.prototype.getAge = function() { // age에 접근할 수 있는 클로저 함수 // 인스턴스도 함수를 사용할 수 있게 
        return age;
    }

    return innerPersonType; // 함수를 빼냄 
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());