async function message() {
    let promise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve("This is message");
        }, 2000);
    });
    let result = await promise;
    console.log(result);
}
message();