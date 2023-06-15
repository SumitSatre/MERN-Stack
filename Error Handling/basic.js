console.log("My name is sumit");

try{
    console.log(sumit);
}
catch(error){
    console.warn("There is some problem : ");
    console.warn(error);
}

setTimeout(() => {
    console.log("working");
}, 2000); 

console.log("End");

// 