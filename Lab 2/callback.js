function add(a,b,printme){
    printme(a+b)
}

function printyou(res){
    console.log("sum=",res)
}

add(5,6,printyou)