const clientData = JSON.parse(localStorage.getItem(clientData)) || [];










function addClientData (event) {
    event.preventDefault();
    if (!clientData) {
        clientData = [];
    }

    let data = {
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        email: $('#email').val().trim(),
        phone: $('#phone').val().trim(),
    }

    clientData.push(data);

    localStorage.setItem('clientData', JSON.stringify(clientData));
}







$(document).ready(function () {
})
$("#add-assessment").on('submit', addClientData);