function calculateTip() {
    //Get value of the inputs
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("serviceQual").value;
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("numPeople").value;
    console.log(numberOfPeople);

    //Validate their input

    var amount = Number(billAmount);

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid input for bill amount");
        return;
    }

    //Service Selector

    var service = Number(serviceQuality);

    if (service === 0) {
        alert("You must pick an option for service quality.");
        return;
    }

    //Calculate the amount of tip each person should pay

    var people = Number(numberOfPeople);

    if(isNaN(people) || people < 1){
        alert("Enter a valid number of people");
        return;
    }

    var tipPerPerson = (amount * service) / people;
    

    var totalPerPerson = amount / people + tipPerPerson;
    totalPerPerson = totalPerPerson.toFixed(2);

    //Display the information
    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tip").innerText = tipPerPerson;
}

function reset() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQual").value = "0";
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").style.display = "none";
    document.getElementById("total").innerText = totalPerPerson;
}

//When button is pressed:
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}

document.getElementById("reset").onclick = function() {
    reset();
}