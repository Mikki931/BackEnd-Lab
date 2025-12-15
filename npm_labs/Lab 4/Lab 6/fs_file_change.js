const fs = require('fs');

fs.watch('.',(eventType,filename)=>{
    if(filename == 'hello.txt'){
        console.log(`Event ${eventType},File:${filename}`);
    }
})

// fs.watch('.',(eventType,filename)=>{
//     if(filename==='demo.txt'){
//         console.log(`Event ${eventType},File:${filename}`);
//     }
// })