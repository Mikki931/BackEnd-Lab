const os=require("os");

console.log("Operating system:",os.type());
console.log("Oprating system version:",os.version());
console.log("Oprating system platform:",os.platform());
console.log("Oprating system architecture:",os.arch());

var totalmem=os.totalmem();
totalmem=totalmem/(1024*1024*1024);
console.log("Total Memory(In GB):",totalmem);

var freemem=os.freemem();
freemem=freemem/(1024*1024*1024);
console.log("Total Memory(In GB):",freemem);

console.log(os.userInfo());

const seconds=os.uptime();

console.log("seconds=",seconds);
console.log("Hour=",seconds/3600);

const cpus=os.cpus();
console.log(cpus);
console.log(cpus.length);
for(i=0;i<cpus.length;i++){
    console.log("module ",i+1);
    console.log(cpus[i].model);
}

console.log(os.networkInterfaces());