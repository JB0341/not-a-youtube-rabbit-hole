let currentDataId = 1;





//form next dynamic page for submit
$('.next-btn').on('click', function(event) {
    event.preventDefault();
    if (currentDataId === 5) {
        console.log('Thank You For Submitting');
        
        return;
    };

    $(`#${currentDataId}`).addClass('d-none');
    currentDataId++;
    $(`#${currentDataId}`).removeClass('d-none');
    console.log(currentDataId);
    
});