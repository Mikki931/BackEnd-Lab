const fs = require('fs');

//Sync
// try{
//     fs.writeFileSync('demo.txt','Demo is what you need');
//     console.log("Write Operation Successful");
// }catch(err){
//     console.log("Error:",err);
// }

//Async
fs.writeFile('demo.txt','You definitely need a demo ASync',(err)=>{
    if(err) console.log("Error:",err);
    else console.log("Write Operation Sucessful");
})