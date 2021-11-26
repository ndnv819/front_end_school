//숫자형 (Number)
var num = 10;

document.write(num, '<br>');  // 10
document.write(num/3, '<br>');  // 3.3333..
document.write(parseInt(num/3), '<br>');  // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, '<br>');  // 4.5
document.write("빼기 : ", 5 - 7, '<br>');  // -2
document.write("곱하기 : ", 3 * 2, '<br>');  // 6
document.write("나누기 : ", 2/2, '<br>'); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1/0,'<br>'); // Infinity
document.write( "숫자가 아님" / 2,'<br>' ); 
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

document.write("NaN?", isNaN(6),'<br>'); // 6 너 숫자 아니지? false 
document.write("NaN?", isNaN("ddd"),'<br>'); // ddd 너 숫자 아니지? true 

// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10
// let number = 0o12; //0 ~ 7 -> 10
// let number = 0xff; //0 ~ f -> 10
// let number = parseInt('13', 10)
let number = parseFloat('13.3px.10', 10) //문자열을 실수로 바꾸는 함수. 분석할 수 없으면 NaN.
// let number = parseFloat('r13.3px.10', 10); //문자열을 실수로 바꾸는 함수. 분석할 수 없으면 NaN.

document.write(number, '<br>');
document.write(0.1 + 0.2 == 0.3, '<br>'); //false
document.write(9999999999999999999, '<br>');