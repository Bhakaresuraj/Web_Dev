const object={
    1:"true",
    2:"true",
    3:"false",
    4:"true",
    5:"false"
} 

// for in loop .......

for(let obj in object){
    console.log( obj, " = ",object[obj]);
}

// for of loop .............
for(variable  of "name" ){

    console.log(variable);
}

let i=10;

// while loop ............

while(i<10){
   console.log("while loop");
    console.log(i);
    i++;

}
i=10;
do{

   console.log(" do while loop");
    console.log(i) ;
    i++;
}while(i<10)
