let btn = document.querySelectorAll("button");
for(el of btn){
    el.addEventListener("mouseenter",function (e){
        this.style.backgroundColor="red";
        console.log(el.innerText);
        console.log(e);

    })
    el.addEventListener("pointerout",function (e){
        console.log(e);
        this.style.backgroundColor="grey";
        console.warn("Mouse moved");
    })
}

