function savedata(data){
    return new Promise((resolve,reject) =>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve("Success");
        }else{
            reject("Failure not completed.");
        }
    })
}
