let btn=document.createElement('button');
btn.classList.add("button");
btn.innerText="Click me";
document.body.append(btn);

let input=document.createElement('input');
input.classList.add('input');
document.body.append(input);

input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
// btn.setAttribute("class","btn");

let butt=document.querySelector("#btn");
butt.style.backgroundColor='red';
butt.style.color="white";



let h1=document.createElement('h1');

h1.innerHTML="<u> DOM Practice .!</u>";
document.body.append(h1);
h1.style.color="purple";


let p=document.createElement('p');
p.innerHTML="“Apna College <b> Delta </b> Practice”"
document.body.append(p);
p.style.color="orange"