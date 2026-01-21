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


// let JSONdata = {
//     "current_page": 1,
//     "first_page_url": "https://catfact.ninja/facts?page=1",
//     "from": 1,
//     "last_page": 34,
//     "last_page_url": "https://catfact.ninja/facts?page=34",

//     "next_page_url": "https://catfact.ninja/facts?page=2",
//     "path": "https://catfact.ninja/facts",
//     "per_page": 10,
//     "prev_page_url": null,
//     "to": 10,
//     "total": 332
// };

// JSONdata=JSON.stringify(JSONdata);

// console.log(JSONdata)



// let h1 = document.querySelector("h1");
// function extraction(url, delay, count, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fetch(url, {
//                 headers: {
//                     "Accept": "application/json"
//                 }
//             }).then((response) => {
//                 console.log(`response ${count}:`);
//                 return response.json();
//             })
//                 .then((data) => {
//                     let color1 = Math.floor(Math.random() * 255), color2 = Math.floor(Math.random() * 255), color3 = Math.floor(Math.random() * 255);;
//                     console.log(data.fact);
//                     h1.style.color = `rgb(${color1},${color1},${color1})`;
//                     resolve();
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 })
//         }, delay);
//     })
// }

// async function data() {
//     let color = "red"
//     let delay = 3000, count = 1, url = "https://catfact.ninja/fact";
//     await extraction(url, delay, count, color);
//     count++;
//     await extraction(url, delay, count, color);
//     count++;
//     await extraction(url, delay, count, color);
//     count++;
//     await extraction(url, delay, count, color);
//     count++;
//     await extraction(url, delay, count, color);
// }

// data();

//     .then((response) => {
//         console.log("response 1     :");
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.joke);
//         return fetch(url,{
//     headers:{
//         "Accept":"application/json"
//     }
// });
//     })
//     .then((data) => {
//         console.log("response 2 :");
//         return data.json();
//     })
//     .then((data) => {
//         console.log(data.joke);

//     })
//     .catch((err) => {
//         console.log(err);
//     })










// fetch(url)
//     .then((response) => {
//         console.log("1st fetch completed  .");
//         return fetch(url);
//     })
//     .then((res) => {
//         console.log("2nd fetch completed");
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// async function extraction() {
//     let url = "https://catfact.ninja/fact";
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     res = await fetch(url);
//     data = await res.json();
//     console.log(data.fact);

//     res = await fetch(url);
//     data = await res.json();
//     console.log(data.fact);

//     res = await fetch(url);
//     data = await res.json();
//     console.log(data.fact);
// }

// extraction();

let but = document.querySelector(".but");
let p = document.querySelector(".fact");
let img=document.querySelector("img");
but.addEventListener("click", async () => {
    let url = await getdata();
    // p.innerText =;
    img.src=url;
})

async function getdata() {
    let url = "https://dog.ceo/api/breeds/image/random";
    let data = await axios.get(url);
    return data.data.message;
}
// getdata();

