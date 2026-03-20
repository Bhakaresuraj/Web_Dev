 let input = document.querySelector("input");
 let btn= document.querySelector("button");
 let ul= document.querySelector("ul");
 
 btn.addEventListener("click",function(){
    let list=document.createElement("li");
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    list.innerText=input.value;
    input.value="";
    list.appendChild(delbtn);
    ul.appendChild(list);
 })


 ul.addEventListener("click",function(event){
     console.dir(event.target.nodeName)
     if(event.target.nodeName=="BUTTON"){
        console.dir(`deleted due to ${event.target.nodeName}`)
        event.target.parentElement.remove();
    }
 })