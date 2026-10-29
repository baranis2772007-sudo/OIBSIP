function convertTemperature() {
  let temp = document.getElementById("temperature").value;

  let unit = document.getElementById("unit").value;

  let error = document.getElementById("error");

  error.innerHTML = "";

  if (temp.trim() === "") {
    error.innerHTML = "Please enter a temperature.";
    return;
  }

  if (isNaN(temp)) {
    error.innerHTML = "Only numeric values are allowed.";
    return;
  }

  temp = parseFloat(temp);

  let c, f, k;

  if (unit === "celsius") {
    if (temp < -273.15) {
      error.innerHTML =
        "Temperature cannot be below Absolute Zero (-273.15°C).";
      return;
    }

    c = temp;
    f = (temp * 9) / 5 + 32;
    k = temp + 273.15;
  } else if (unit === "fahrenheit") {
    if (temp < -459.67) {
      error.innerHTML =
        "Temperature cannot be below Absolute Zero (-459.67°F).";
      return;
    }

    c = ((temp - 32) * 5) / 9;
    f = temp;
    k = c + 273.15;
  } else {
    if (temp < 0) {
      error.innerHTML = "Temperature cannot be below Absolute Zero (0 K).";
      return;
    }

    c = temp - 273.15;
    f = (c * 9) / 5 + 32;
    k = temp;
  }

  document.getElementById("celsius").innerHTML = c.toFixed(2) + " °C";

  document.getElementById("fahrenheit").innerHTML = f.toFixed(2) + " °F";

  document.getElementById("kelvin").innerHTML = k.toFixed(2) + " K";
}
