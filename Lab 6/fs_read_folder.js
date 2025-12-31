const fs = require("fs");

fs.readdir("./Lab 6",(err,data)=>{
    if(err) console.log("Error:",err);
    else console.log("Data:",data);
})