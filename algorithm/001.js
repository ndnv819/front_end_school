/////// 몸풀기 문제 ///////

// 문제 1
// https://codingdojang.com/scode/393?answer_mode=hide

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법
Array(10)
let x = Array(10);
x[2] = undefined // undefined
x // (10) [비어 있음 × 2, undefined, 비어 있음 × 7]
x[3] = null // null
x // (10) [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20 // 20
x // (20) [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0) // (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Array(10).fill(10) // (10) [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

// 1~100까지 채우기 
Array(100).fill(1).map((value, index) => value+index);

// 그외
'.'.repeat(9);
'.'.repeat(9).split('.'); // (10) ['', '', '', '', '', '', '', '', '', '']
Array.from('abc'); // (3) ['a', 'b', 'c']
Array.from('a', repeat(10)); //(10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
Array.from('ab'.repeat(10)); // (20) ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b']

// 풀이
Array(100).fill(1).map((value, index) => value+index) + '' // '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100'

(Array(100).fill(1).map((value, index) => value+index) + '').split('8'); // (21) ['1,2,3,4,5,6,7,', ',9,10,11,12,13,14,15,16,17,1', ',19,20,21,22,23,24,25,26,27,2', ',29,30,31,32,33,34,35,36,37,3', ',39,40,41,42,43,44,45,46,47,4', ',49,50,51,52,53,54,55,56,57,5', ',59,60,61,62,63,64,65,66,67,6', ',69,70,71,72,73,74,75,76,77,7', ',79,', '0,', '1,', '2,', '3,', '4,', '5,', '6,', '7,', '', ',', '9,90,91,92,93,94,95,96,97,9', ',99,100']

(Array(100).fill(1).map((value, index) => value+index) + '').split('8').length // 21

// 정답 
(Array(100).fill(1).map((value, index) => value+index) + '').split('8').length - 1; // 20 

// -1 한 이유 : 가래떡을 4번 썰면 다섯 덩이가 되니까 1을 빼는 거다. 
// '1, 2, 3, 4, 8, 1, 2, 3, 4' 에서 8의 개수 찾기 
'1, 2, 3, 4, 8, 1, 2, 3, 4'.split('8'); // (2) ['1, 2, 3, 4, ', ', 1, 2, 3, 4']

'1, 2, 3, 4, 8, 1, 2, 3, 4'.split('8').length; // 2

'1, 2, 3, 4, 8, 1, 2, 3, 4'.split('8').length - 1; // 1 

// 문제 2 
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 풀이 1 
let s = [1, 3, 4, 8, 13, 17, 20];

let arr = new Array();

for (let i = 1; i < s.length; i++) {
    // console.log(s[i], s[i-1])
    // console.log(s[i] - s[i-1])
    arr.push(s[i] - s[i-1])
} // 6

arr // (6) [2, 1, 4, 5, 4, 3]

// 최솟값 찾기 
// let result = arr.indexOf(Math.min.apply(null, arr)); 
let result = arr.indexOf(Math.min(...arr));
result //1

// 정답
console.log(s[result], s[result+1]);

// 풀이 2 (hojun) 
let s = [1, 3, 4, 8, 13, 17, 20];
// let ss = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]]);
zip([1, 3, 4], [10, 20, 30]); // (3) [1, 10], [3, 20], [4, 30]
zip(s.slice(), s.slice(1)) // [1, 3], [3, 4], [4, 8], [8, 13], [13, 17], [17, 20], [20, undefined] -> undefined 빼줘야 함 
zip(s.slice(), s.slice(1)).slice(0, -1); // [1, 3], [3, 4], [4, 8], [8, 13], [13, 17], [17, 20]
// zip(s.slice(0, s.length - 1), s.slice(1)) 

// 정렬
let pairs = zip(s.slice(), s.slice(1)).slice(0, -1);

// -1 순서 유지
// 1 순서 바꿈
// 오름차순 정렬 
// 뒤에 값이 더 크면 순서 유지 
// 뒤에 값이 적으면 순서 바꿈 

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용 
// MAX_SAFE_INTEGER를 주로 사용한다
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0]
// result는 최종 결과값
let result = [];

for(let i of pairs) {
    console.log(i);
    if(init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result);

/////// 몸풀기 문제 끝 ///////

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도

// 1. 스택과 큐 
class Stack {
    constructor() { // 자료구조의 근간, 데이터 세팅 
        this.arr = []; // this를 쓴 이유 : s의 영역을 가리키기 위해서 // 인스턴스를 향할려고 
    }

    push(data) {
        this.arr.push(data);
    }

    pop(index=this.arr.length-1) {
        // index가 입력이 안되었을 때, 마지막 값을 넣어준다 
        // s.pop(), s.pop(마지막인덱스)
        if(index === this.arr.length-1) {
            return this.arr.pop(); // pop은 꺼낸 값을 리턴해줌 
        }
        // index가 입력이 되었을 때
        let result = this.arr.splice(index, 1);
        // let result = this.arr[index]
        // this.arr.slice
        // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index+1)]
        return result // pop이 꺼낸 값 
        // 마지막값이 index와 같을 때 마지막 값을 pop 해준다는 뜻이고 마지막 값이 index와 같지 않을 경우 index에서 1번째에 있는 값을 splice 해준다
        // function test(x=10) {
        //     if(x === 10) {
        //         return x 
        //     }
        // }
        // [10, 20, 30, 40].length // 4 
        // 여기서 4의 값은? 없다. index 0~3밖에 없으니까 
        // 그래서 제일 마지막 인덱스를 가리킬려면 length-1을 하면 된다
    }

    empty() {
        if(this.arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    top() {
        return this.arr[this.arr.length-1]


    }

    bottom() {
        return this.arr[0]
    }
}

let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);


// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

// 기본 
const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: null
                }
            }
        }
    }
}

// 아래처럼 .next를 사용하고 싶은거임 
list.head.value // 90
list.head.next.value // 2
list.head.next.next.value // 77

//// 아래는 어려움 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length() {
        return this.데이터수;
    }

    append (data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨 
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }

    toString(){
        // return 'hello world';
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data},`
            순회용현재노드 = 순회용현재노드.next;
        }
        return s.slice(0, -1);
    }

    get fullData(){
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`)
    }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()

l.head.data // 'init'
l.head.next.data // 1
l.head.next.next.data // 2



// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회



// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도

