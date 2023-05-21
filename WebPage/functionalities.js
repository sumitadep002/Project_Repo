// Function to update the LED status on the web page
function updateLEDStatus(led, status) {
    const statusElement = document.getElementById(led + 'Status');
    statusElement.textContent = 'Status: ' + status;
}

// Function to toggle the state of an LED
function toggleLED(led) {
    fetch('/toggle?led=' + led)
        .then(response => response.text())
        .then(data => updateLEDStatus(led, data))
        .catch(error => console.error('Error toggling LED:', error));
}

// Function to update the voltage value on the web page
function updateVoltage(value) {
    document.getElementById('voltageValue').textContent = value;
}

// Function to update the temperature value on the web page
function updateTemperature(value) {
    document.getElementById('temperatureValue').textContent = value;
}

// Function to fetch the real-time ratings data from the server
function fetchRatingsData() {
    // Fetch voltage rating
    fetch('/voltage')
        .then(response => response.text())
        .then(data => updateVoltage(data))
        .catch(error => console.error('Error fetching voltage rating:', error));

    // Fetch temperature rating
    fetch('/temperature')
        .then(response => response.text())
        .then(data => updateTemperature(data))
        .catch(error => console.error('Error fetching temperature rating:', error));
}

// Periodically fetch real-time ratings data
setInterval(fetchRatingsData, 1000); // Update every 1 second
