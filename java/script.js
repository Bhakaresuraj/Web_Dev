let num=prompt("Enter a number");
while(true){
    let guess = prompt("Enter your guess :");
    if(guess.toUpperCase()=="QUIT"){
        console.log("Quiting the game");
        break;
    }
    let random =Math.floor(Math.random()* num )+1;
    if(guess==random){console.log("OMG!!");

    }
}