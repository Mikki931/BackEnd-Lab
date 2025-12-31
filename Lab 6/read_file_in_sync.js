const fs = require('fs');

try{
    data = fs.readFileSync('hello.txt','utf8');
    console.log(data);
}catch(err){
    console.log(err);
}
