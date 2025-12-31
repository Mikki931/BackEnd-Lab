const url = "https://www.example.com/products?category=electronics&sort=price_asc&page=2";
const urlobj = new URL(url);
console.log("Prototype:",urlobj.protocol);
console.log("pathname:",urlobj.pathname);
console.log("Hostname:",urlobj.hostname);

console.log("Query Parameters:");
urlobj.searchParams.forEach((value,key)=>{
    console.log(`\t${key}: ${value}`);
});