// Username, Identifier, job
// booker, 129012, programmer
// grey, 072070, coder
// johnson, 814081, data scientist
// jenkins, 469346, front-end developer
// smith, 795079, back-end developer

// 1. user별 폴더를 생성(username으로 폴더명 생성해주세요.)
// 각 폴더에 userinfo.txt을 생성한 후 Username, Identifier, job을 아래 양식으로 모두 저장해주세요.
// Username : hojunlee
// Identifier : 999999
// Job : promgrammer

const fs = require('fs'); 

fs.readFile('./username.csv', 'utf8', (err, data) => { 
  data 
    .split('\n') 
    .slice(1) 
    .map(v => v.split(', ')) 
    .forEach(([ username, identifier, job ]) => { 
      fs.mkdir(`./${username}`, (err) => { 
        if (err) console.log(err); 
      }); 
      const text = `Username : ${username}\nIdentifier : ${identifier}\nJob : ${job}`; 
      fs.writeFile(`./${username}/userinfo.txt`, text, (err) => { 
        if (err) console.log(err); 
      }); 
    }); 

  if (err) console.log(err); 
}); 