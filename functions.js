function alertMessage() {
    alert("Hello!!!");
}

function gain1() {
    document.getElementById("resultEx2").innerHTML = parseFloat(prompt("Input 1 number : ")) + 1;
}

function compare2digits() {
    let num1 = parseFloat(prompt("Input first number : "));
    let num2 = parseFloat(prompt("Input second number : "));
    if (num1 > num2) document.getElementById("resultEx3").innerHTML = num1 + " is greater than " + num2;
    else document.getElementById("resultEx3").innerHTML = "sum = " + (num1 + num2);
}

function Ex4() {
    let result;
    result = 0;
    alert(result);
    result = addNumbers();
    alert(result);
}

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

function Ex5() {
    let star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let constellation = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'UrsaMajor', 'Leo'];
    let inputStar = prompt("Input a star : ");
    let outputConstel;
    for (let i = 0; i < star.length; i++) {
        if (inputStar === star[i]) {
            outputConstel = constellation[i];
            document.getElementById('resultEx5').innerHTML =
                inputStar + "is in the constellation " + outputConstel;
            break;
        }
        if (i === (star.length - 1)) document.getElementById('resultEx5').innerHTML = "Your star is not exist!!!";
    }
}
