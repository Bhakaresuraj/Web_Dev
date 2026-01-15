let todo=[];
while (true) {
    let req = prompt("Enter your request ");
    console.log(req);
    if(req.toUpperCase() == "QUIT"){
        console.log("Exiting the App.");
        break;
    }
    if(req.toUpperCase()=="LIST"){
        let i=1;
        console.log("-------------List--------------------------");
        for(task of todo){
            console.log(`${i} : ${task}`);
            i++;
        }
        console.log("-------------------------------------------");
    }
    if(req.toUpperCase()=="ADD"){
        let newTask = prompt("Enter new task ");
        todo.push(newTask);
        console.log(`"${newTask}" added to the list.`);
    }
    if(req.toUpperCase()=="DELETE"){    
        let index = prompt("Enter index of task to delete ");
        todo.splice(index-1,1);
        console.log(`Task at index ${index} deleted.`);
    }
}
