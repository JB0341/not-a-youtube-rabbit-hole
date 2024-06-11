let currentDataId = 1;

async function getDoc(searchTerm, location) {
    const searchTermEncoded = encodeURIComponent(searchTerm);
    const locationEncoded = encodeURIComponent(location);

    const url = `https://yelp-business-api.p.rapidapi.com/search?query=${searchTermEncoded}&location=${locationEncoded}&page=1`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a4b9d7bc0bmshf9dce26bf58e4afp19b67ejsnce794ff3e500',
            'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        

        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
}

getDoc('health clinic', 'new york');



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