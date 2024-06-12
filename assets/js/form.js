



$('.next-btn').on('click', function(event) {
    event.preventDefault();
    if (currentDataId === 5) {
        console.log('Thank You For Submitting');
    };

    $(`#${currentDataId}`).addClass('d-none');
    currentDataId++;
    $(`#${currentDataId}`).removeClass('d-none');
    console.log(currentDataId);
    
});





function addClientData (event) {
    event.preventDefault();
    const clientData = JSON.parse(localStorage.getItem('clientData')) || [];
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
    $("#add-assessment").on('submit', addClientData);
})