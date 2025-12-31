const fs=require('fs');

 console.log("Start");

 fs.readFile("hello.txt","utf8",(err,data)=>{
    if(err) console.log("error:",err);
    else{
        console.log(data);
    }
 })