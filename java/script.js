let smallImg = document.getElementsByClassName("oldImg");
for (k of smallImg) {
    console.dir(` img link " ${k.src} "change to  " http://127.0.0.1:5500/java/assets/spiderman_img.png "B`);
    k.src = "http://127.0.0.1:5500/java/assets/spiderman_img.png"

}

