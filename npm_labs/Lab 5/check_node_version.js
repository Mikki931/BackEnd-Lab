const child_process = require('child_process');

child_process.exec("node -ve",(err,stdout,stderr)=>{
    if(err){
        console.log("Normal Error:",err);
    }
    if(stderr){
        console.log("Standard error",stderr);
    }
    console.log("Output:",stdout);
}

)