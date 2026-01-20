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




let h1 = document.querySelector("h1");

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






// async function greet() {
//     throw "lazy boy";
//     return "hello !";
// }
// let demo =async ()=> ("demo");

// greet().then((result) => {
//     console.log("success",result);
// })
// .catch((err)=>{
//     console.log("failure",err)
// })




// function changeCol(col, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let ran = Math.floor(Math.random() * 5);
//             if (ran > 3) {
//                 reject("error occur");
//             }
//             h1.style.color = col;
//             console.log("color change to ", col);
//             resolve("color change to ", col);
//         }, 1000);
//     });
// }


// async function coloname() {
//     try {
//         await changeCol("red")
//         await changeCol("purple")
//         await changeCol("yellow")
//         await changeCol("brown")
//         await changeCol("pink")
//         await changeCol("blue")
//     }catch(err){
//         console.log("Error :    ",err);
//     }

//     let k = 10;
//     console.log(k);
// }

// coloname();


let JSONdata = {
    "current_page": 1,
    "first_page_url": "https://catfact.ninja/facts?page=1",
    "from": 1,
    "last_page": 34,
    "last_page_url": "https://catfact.ninja/facts?page=34",
            
    "next_page_url": "https://catfact.ninja/facts?page=2",
    "path": "https://catfact.ninja/facts",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 332
};

JSONdata=JSON.stringify(JSONdata);

console.log(JSONdata)