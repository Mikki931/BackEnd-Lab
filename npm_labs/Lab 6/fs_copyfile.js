const fs = require('fs');

fs.copyFile("source.txt","hello.txt",(err)=>{
    if(err){
        console.log("Error:",err);
    }
    else console.log("File Copied");
})