let btn = document.querySelectorAll("button");
for (let el of btn) {
    el.onmouseenter = () => {
        console.log("hover")
    };

}