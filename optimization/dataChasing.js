const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// 이렇게 하지 말자 
// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖';
// });

// 원본 건드리지 않는 방향으로!
const aespa2 = aespa.map((item) => {
    return item + '💖'
});

console.log(aespa2);
console.log(aespa);