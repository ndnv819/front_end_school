// let result = 0;

// for (let x = 0; x < 101; x++) {
//     // console.log(x);
//     if(x % 3 == 0 && x % 5 == 0) {
//         console.log(x);
//         result += x;
//     }
// }

// console.log(`result : ` + result);

// 123 + ''
// '123'
// !!true
// true
// !!'hojun'
// true
// !!''
// false
// !!1
// true
// !!0
// false
// !!undefined
// false
// !!NaN
// false


// 8이 들어가는 횟수 구하기
let text = '';
let count = 0;

for (let i = 0; i < 101; i++) {
    text += i 
}

console.log(text); // 0~100

for(let i = 0; i < text.length; i++) { // text.length = 193
    if(text[i] == '8') {
        count += 1;
    }
}

console.log(count); // 20


// 최솟값, 최대값
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
    if(temp < sample[i]) {
        temp = sample[i];
    }
}

// 두글자씩 빼내기
let text = 'javascript'; 

for(let i = 0; i < text.length; i++) {
    console.log(text[i], text[i+1]);
}

let value = [1, 3, 4, 8, 13, 17, 20];

for (let i = 1; i < value.length; i++) {
    console.log(value[i - 1], value[i])
}

// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
////////////////////////


// 1번째 순회(i==0, temp=3, result=0)
for (let i = 0; i < 8; i++) {
    if (3 > 3){
        temp = value[i+1] - value[i];
        result = i;
    }
}

// 2번째 순회(i==1, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (3 > 2){
        temp = 2;
        result = 1;
    }
}

// 3번째 순회(i==2, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (2 > 2){
        temp = value[i+1] - value[i];
        result = i;
    }
}
