console.log("This is process object in the node ");

let arg=process.argv;
console.log(arg);
for(let i=2;i<arg.length;i++){
    console.log("Hello and welcome " +arg[i] );
}
