let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector("div");
btn.addEventListener("mouseenter",()=>{
    console.log("Color changedd..")
    let val1=Math.floor(Math.random()*255);
    let val2=Math.floor(Math.random()*255);
    let val3=Math.floor(Math.random()*255);
    h1.innerText=`(${val1},${val2},${val3});`
    div.style.backgroundColor=`rgb(${val1},${val2},${val3})`;
    // btn.style.color="yellow";
    h1.style.color=`rgb(${val1},${val2},${val3})`;
    btn.style.color=`rgb(${val1},${val2},${val3})`;
})
btn.addEventListener("click",()=>{
    console.log("ccolor changed by clicking button  ..")
    let val1=Math.floor(Math.random()*255);
    let val2=Math.floor(Math.random()*255);
    let val3=Math.floor(Math.random()*255);
    h1.innerText=`(${val1},${val2},${val3});`
    // btn.style.color="yellow";
    btn.style.color=`rgb(${val1},${val2},${val3})`;
    div.style.backgroundColor=`rgb(${val1},${val2},${val3})`;
    h1.style.color=`rgb(${val1},${val2},${val3})`;  
})