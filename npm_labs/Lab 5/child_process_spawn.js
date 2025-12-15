const cp=require("child_process");
const {chdir} = require("process");

const child = cp.process.spawn("cmd.exe",["/c","dir","/s","C:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`STDERR:${data}`);
});

child.stdout.on("data",(data)=>{
    console.log(`stdout: ${data}`);
});

child.on("close",(data)=>{
    console.log(`close: ${data}`);
});