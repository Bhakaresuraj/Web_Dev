let btn=document.querySelectorAll("button");
for(button of btn){

    button.addEventListener("mouseenter",()=>{
        console.log("hello Suraj ...!");
    })
    button.addEventListener("click",()=>{
        button.style.backgroundcolor="red";
    })

}