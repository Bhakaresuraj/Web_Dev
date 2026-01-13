let para=document.querySelector("p");
console.dir(para);
// console.
para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
para.innerText =`Suraj Somath Bhakare . I live inn Malwadi Takali Haji Tal- "Shirur" `
para.innerHTML=`<b>Suraj Somath Bhakare </b>. I live inn Malwadi Takali Haji Tal- <b>"Shirur"</b> `

let heading=document.querySelector("h1");
heading.innerHTML=`<u> ${heading.innerText} </u>`;
let links= document.querySelectorAll('.box a');
for(link of links){
    link.style.color='yellow';
}
