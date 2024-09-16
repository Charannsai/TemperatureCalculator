let button1, button2, value, result;
button1 = document.getElementById('C1_Container');
button2 = document.getElementById('C2_Container');
value = document.getElementById('TextBox1');

function convertTemperature() {
    const tempValue = parseFloat(value.value); 
    const unitFrom = button1.value;  
    const unitTo = button2.value;    

    if (unitFrom === "celsius") {
        if (unitTo === "fahrenheit") {
            result = (tempValue * 9/5) + 32;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °F`;
        } else if (unitTo === "kelvin") {
            result = tempValue + 273.15;
            document.getElementById('Value').textContent = `${result.toFixed(2)} K`;
        } else {
            result = tempValue;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °C`;
        }
    } else if (unitFrom === "fahrenheit") {
        if (unitTo === "celsius") {
            result = (tempValue - 32) * 5/9;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °C`;
        } else if (unitTo === "kelvin") {
            result = (tempValue - 32) * 5/9 + 273.15;
            document.getElementById('Value').textContent = `${result.toFixed(2)} K`;
        } else {
            result = tempValue;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °F`;
        }
    } else if (unitFrom === "kelvin") {
        if (unitTo === "celsius") {
            result = tempValue - 273.15;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °C`;
        } else if (unitTo === "fahrenheit") {
            result = (tempValue - 273.15) * 9/5 + 32;
            document.getElementById('Value').textContent = `${result.toFixed(2)} °F`;
        } else {
            result = tempValue;
            document.getElementById('Value').textContent = `${result.toFixed(2)} K`;
        }
    }
}

// Add event listener to the Enter button
document.getElementById('EnterButton').addEventListener('click', convertTemperature);
