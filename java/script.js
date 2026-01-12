// function mergeObj(obj1,obj2){
//     return {...obj1,...obj2};
// }
// const stud={
//     name:"suraj",
//     age: 30
// }
// const obj2={
//     gen:"male",
//     city:"Pune"
// }
// let mergedObject =mergeObj(stud,obj2);



// let arr=[1,2,3,4];
// function doublearr(arr,...args){
//     let temp =args.map((el)=>el*2);
//     return [...arr,...temp];
// }
// let ano=doublearr(arr,7,5,4,8);     


// let arr=["suraj","yash","Sudarshan","Dipak"];
// let newarr=arr.map((el)=>el.toUpperCase());

let arr=[1,2,3,4];
// let newarr=arr.map((el)=>el+5);

let s_sum=arr.reduce((res ,el)=>((el**2)+res));
let avg=arr.reduce((res ,el)=>((el)+res))/arr.length;
