let arr=[6,7,5,96,3];
console.log(...arr);

// let ans= arr.every((el)=>(el%10==0));
// console.log(ans);
console.log(arr.reduce((ans,el)=>{
    if(ans>el){
        return el;
    }else{
        return ans;
    }
}))