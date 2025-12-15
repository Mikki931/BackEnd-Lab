const fs= require('fs');

fs.unlink("temp.txt",(err)=>{
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log("SuccesFully Deleted!!")
    }
})