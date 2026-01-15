let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function () {
    let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");

    // update input and heading
    input.value = filteredValue;
    h2.innerText = filteredValue;
});
