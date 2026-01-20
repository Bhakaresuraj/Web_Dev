function savedata(data) {
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random() * 10) + 1;
        if (speed > 4) {
            resolve("Success data saved.(result)");
        } else {
            reject("Weak Connection..(error)");
        }
    })
}


savedata("abc").then((result) => {
    console.log("Done", result);
    // console.log(result);

    return savedata("kbc");
})
    .then((result) => {
        console.log("Done", result);
        // console.log(result);
        return savedata("hello");
    })
    .then((result) => {
        console.log("Done", result);
        // console.log(result);
    })
    .catch((error) => {
        console.log("Not saved due to ", error);
        // console.log(error);

    })