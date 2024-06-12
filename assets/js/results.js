const info = document.querySelector("#");

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

// getDoc('health clinic', 'new york');

function render() {

    // let info = JSON.parse(localStorage.getItem("?"))|| []

    // ?

    //     const ?= `
    //     <div>
    //         <row>
    //             <h2>${firstName.title}</h2>
    //             <h3>${depression.title}</h3>
    //             <h3>${postTram.title}</h3>
    //             <h3>${Anxiety.title}</h3>
    //             <h3>${Addiction.title}</h3>
    //         <row>
    //     </div>`

}

function init() {
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const searchType = urlParams.get('searchType');
    const searchLocation = urlParams.get('searchLocation');
    
    if (!searchType || !searchLocation) {
        window.location.replace('../../index.html');
    }

    

};

init();

