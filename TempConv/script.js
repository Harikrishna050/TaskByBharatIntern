const inpBox = document.querySelector(".value");
const wrongIcon = document.querySelector(".cross");

inpBox.addEventListener("focus", function () {
    wrongIcon.style.display = "inline";
});

inpBox.addEventListener("blur", function () {
    wrongIcon.style.display = "none";
});

inpBox.addEventListener("click", function () {
    document.querySelector(".value").value=""
});



function toConvert() {
    let fromUnit = document.getElementById("from")
    let toUnit = document.getElementById("to")
    let inpValue = document.querySelector(".value");
    let ele = document.querySelector(".section")
    if (inpValue.value === "") {
        ele.innerHTML = `<h4> You Have Entered nothing!... </h4>`
    }
    else {
        if (fromUnit.value === "celsius" && toUnit.value === "kelvin") {
            inpValue.value = eval(inpValue.value + "+273.15")

        }
        else if (fromUnit.value === "celsius" && toUnit.value === "fahrenheit") {
            inpValue.value = eval(inpValue.value + "*(9/5)" + "+32")
        }
        else if (fromUnit.value === "kelvin" && toUnit.value === "celsius") {
            inpValue.value = eval(inpValue.value + "-273.15")
        }
        else if (fromUnit.value === "kelvin" && toUnit.value === "fahrenheit") {
            inpValue.value = eval("(" + inpValue.value + "-273.15)*(9/5)+32")
        }
        else if (fromUnit.value === "fahrenheit" && toUnit.value === "celsius") {
            inpValue.value = eval("(" + inpValue.value + "-32)*(5/9)")
        }
        else if (fromUnit.value === "fahrenheit" && toUnit.value === "kelvin") {
            inpValue.value = eval("(" + inpValue.value + "+459.67)*(5/9)")
        }

    }


}

document.querySelector(".swap").addEventListener("click", function () {
    let temp = document.getElementById("to").value;
    document.getElementById("to").value = document.getElementById("from").value
    document.getElementById("from").value = temp
})




