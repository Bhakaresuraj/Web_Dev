let i=1,j=1;
while(i<5){
    j=1;    
    while(j<4){
        if(i==3){
            console.log("i is 3, breaking inner loop");
            break;
        }
        console.log("Inner loop j:", j);
        j++;
    }
    // console.log("Outer loop i:", i);
    i++;
}


