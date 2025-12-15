const fs = require('fs');

fs.appendFile("demo.txt"," I have been appended yeah!!!",(err)=>{
    if(err) console.log("Error:",err);
    else console.log("Data appeded successfully");
})

try{
    fs.appendFileSync("demo.txt","  Append:It's append but with Sync");
}catch(err){
    console.log("Error:",err);
}