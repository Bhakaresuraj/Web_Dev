let h1 = document.querySelector("h1");

function changeCol(color, delay, nextcolor) {
    setTimeout(

        () => {
            h1.style.color = color;
            if(nextcolor) nextcolor();
        }, delay)
}

changeCol("red", 1000, () => {
    changeCol("blue", 1000, () => {
        changeCol("green", 1000, () => {
            changeCol("pink", 1000, () => {
                changeCol("brown", 1000, () => {
                    changeCol("yellow", 1000);
                });
            });
        });
    });
});

