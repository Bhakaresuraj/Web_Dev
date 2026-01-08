// let todo=[];
// while (true) {
//     let req = prompt("Enter your request ");
//     console.log(req);
//     if(req.toUpperCase() == "QUIT"){
//         console.log("Exiting the App.");
//         break;
//     }
//     if(req.toUpperCase()=="LIST"){
//         let i=1;
//         console.log("-------------List--------------------------");
//         for(task of todo){
//             console.log(`${i} : ${task}`);
//             i++;
//         }
//         console.log("-------------------------------------------");
//     }
//     if(req.toUpperCase()=="ADD"){
//         let newTask = prompt("Enter new task ");
//         todo.push(newTask);
//         console.log(`"${newTask}" added to the list.`);
//     }
//     if(req.toUpperCase()=="DELETE"){    
//         let index = prompt("Enter index of task to delete ");
//         todo.splice(index-1,1);
//         console.log(`Task at index ${index} deleted.`);
//     }
// }


/*

Qs1.WriteaJSprogramtodeletealloccurrencesofelement‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]

let arr=[1,2,3,4,5,6,2,3]
let num=prompt("Enter the number :");
for(i of arr){
    console.log(i);
}
for(let i=0;i<arr.length;i++){
    if(num == arr[i]){
        console.log(arr[i]+"  deleted");
        arr.splice(i,1);
    }
}
for(i of arr){
    console.log(i);
}


*/
/*
WriteaJSprogramtofindthenoofdigitsinanumber.

let num = prompt("Enter the number :");
let count=0;
let temp=num;
while(num>=1){
    num=num/10;
    count++;
}
console.log(`The digits in ${temp} is ${count} .`);
*/


// WriteaJSprogramtofindthesumofdigitsinanumber

let num = prompt("Enter the number :");
let count=1;
let temp=num;
while(num > 0){
    count*=num;
    num--;
}
console.log(`The Factorial of  ${temp} is ${count} .`);