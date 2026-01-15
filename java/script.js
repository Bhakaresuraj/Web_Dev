let inp = document.querySelector("input");
let p= document.querySelector("p");
let h1= document.querySelector("h1");
h1.addEventListener("mouseout",function(){
    console.log("mouse out");
})

let str;
inp.addEventListener("input",function(){
     str=this.value;
     p.innerText=str;
})
inp.addEventListener("keypress",function(){
    console.log("changed");
    console.log("final value :"+this.value);

})