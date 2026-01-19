function savedata(data, success, failure) {
    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed >= 4) {
        success(data);
    } else {
        failure(data);
    }
}
savedata("abc",
    (Data) => {
        console.log(` ${Data} is saved successfully 1.`);
        savedata("apana college",
            (data) => {
                console.log(`${data} is saved successfully 2.`);
                savedata("tupana college",
                    (data) => {
                        console.log(`${data} is saved successfully 3.`)
                    },
                    (data) => {
                        console.log(`Weak connection . ${data} is not  saved.`)
                    }
                )
            },
            (data) => {
                console.log(`Weak connection . ${data} is not  saved.`)
            })
    },
    (Data) => {
        console.log(`weak connection : ${Data} is not saved`);
    })

