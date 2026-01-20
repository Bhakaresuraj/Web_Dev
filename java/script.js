// function savedata(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if (speed > 4) {
//             resolve("Success data saved.(result)");
//         } else {
//             reject("Weak Connection..(error)");
//         }
//     })
// }


// savedata("abc").then((result) => {
//     console.log("Done", result);
//     // console.log(result);

//     return savedata("kbc");
// })
//     .then((result) => {
//         console.log("Done", result);
//         // console.log(result);
//         return savedata("hello");
//     })
//     .then((result) => {
//         console.log("Done", result);
//         // console.log(result);
//     })
//     .catch((error) => {
//         console.log("Not saved due to ", error);
//         // console.log(error);

//     })




// let h1 = document.querySelector("h1");

// function changeCol(col, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = col;
//             resolve();
//         }, 1500);
//     })
// }


// changeCol("red", 1500)
//     .then(() => {
//         console.log("color change to red.");
//         return changeCol("orange", 1000)
//     })
//     .then(() => {
//         console.log("color change to orange.");
//         return changeCol("blue", 1000)
//     })
//     .then(() => {
//         console.log("color change to blue.");
//         return changeCol("yellow", 1000)
//     })
//     .then(() => {
//         console.log("color change to yellow.");
//         return changeCol("pink", 1000);
//     })
//     .then(() => {
//         console.log("color change to pink.");
//         return changeCol("brown", 1000);
//     })
//     .then(() => {
//         console.log("color change to brown.");
//         // return changeCol("orange", 1000);
//     })
//     .catch(() => {
//         console.log("color not change .");
//     })






async function greet() {
    throw "lazy boy";
    return "hello !";
}
let demo =async ()=> ("demo");

greet().then((result) => {
    console.log("success",result);
})
.catch((err)=>{
    console.log("failure",err)
})