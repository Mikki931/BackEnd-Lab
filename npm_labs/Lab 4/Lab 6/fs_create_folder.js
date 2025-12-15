const fs = require('fs');

fs.mkdir("my-data",(err)=>{
    if(err){
        if(err.code === 'EEXIST') console.log("Already Exist!!");
        else console.log("Error")
    }
    else{
        console.log("Folder made SuccesFully");
    }
})