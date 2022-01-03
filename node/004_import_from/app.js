// 방법2.
import * as 개인프로필 from './two.js';

console.log(개인프로필.이름);
console.log(개인프로필.나이);
개인프로필.한살더먹음();
개인프로필.한살더먹음();
console.log(개인프로필.나이); // 이번에는 출력 완 
console.log(개인프로필.값가져와());



// 방법1.
// import {이름, 나이, 한살더먹음, 값가져와} from './two.js';

// console.log(이름);
// console.log(나이);
// 한살더먹음();
// 한살더먹음();
// console.log(나이); // 이번에는 출력 완 
// console.log(값가져와());