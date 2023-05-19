document.getElementById('led1').addEventListener('click', function() {
    var led1 = document.getElementById('led1');

    if (led1.classList.contains('led-green')) {
        led1.classList.remove('led-green');
        led1.classList.add('led-red');

        // Send request with value 13 to the server
        sendRequest('http://123.456.789.123:1234', 11);
    } else {
        led1.classList.remove('led-red');
        led1.classList.add('led-green');

        // Send request with value 12 to the server
        sendRequest('http://123.456.789.123:1234', 12);
    }
});

document.getElementById('led2').addEventListener('click', function() {
    var led2 = document.getElementById('led2');

    if (led2.classList.contains('led-green')) {
        led2.classList.remove('led-green');
        led2.classList.add('led-red');

        // Send request with value 14 to the server
        sendRequest('http://127.0.0.1:5500', 13);
    } else {
        led2.classList.remove('led-red');
        led2.classList.add('led-green');

        // Send request with value 14 to the server
        sendRequest('http://127.0.0.1:5500', 14);
    }
});

function sendRequest(url, value) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url + '?value=' + value, true);
    xhttp.send();
}
