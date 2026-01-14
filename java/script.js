// let para=document.querySelector("p");
// console.dir(para);
// // console.
// para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
// para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
// para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
// para.innerHTML=`<b>Suraj Somath Bhakare </b>. I live inn Malwadi Takali Haji Tal- <b>"Shirur"</b> `

// let heading=document.querySelector("h1");
// heading.innerHTML=`<u> ${heading.innerText} </u>`;
// let links= document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color='yellow';
// }



// let img= document.querySelector("img");
// console.dir(img.classList);

// let h4 = document.querySelector('h4');

// let img=document.querySelector("img");

let btn=document.createElement('button');
btn.style.backgroundColor="red";

let para=document.querySelector('p');
para.insertAdjacentElement("afterbegin",btn);
para.insertAdjacentElement("beforebegin",btn);
para.insertAdjacentElement("beforeend",btn);
para.insertAdjacentElement("afterend",btn);