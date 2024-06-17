// const info = document.querySelector("#");


async function getDoc(searchTerm, location) {
    const searchTermEncoded = encodeURIComponent(searchTerm);
    const locationEncoded = encodeURIComponent(location);
    const url = `https://yelp-business-api.p.rapidapi.com/search?query=${searchTermEncoded}&location=${locationEncoded}&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '02a59a6bd3msh8b98276d625fb31p16f63djsn357e4e8b34f3',
            'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com'
        }
        };
        
    function renderYelp(result) {
        let docsList = result.SearchResults;
        console.log(docsList);
        if (!docsList || !docsList.length) {
            return;
            // MAYBE PRINT NO DOCS FOUND
        } else if (docsList.length > 3) {
            docsList = docsList.slice(0,3);
            console.log(docsList);
        }

        for (let i = 0; i < docsList.length; i++) {
            const data = docsList[i];
    
        const helpInfo = `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">${data.name}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${data.rating}<small class="text-muted fw-light"></small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>${data.priceRange}</li>
                        <li>${data.name}</li>
                        <li>${data.reviewCount}</li>
                        <li>${data.phone}</li>
                    </ul>
                    <a href="${data.businessURL}" target="_blank">
                        <button type="button" class="w-100 btn btn-lg btn-primary">Go To Website</button>
                    </a>
                </div>
            </div>
        </div>
        `;
    
        $('#yelp-container').append(helpInfo);
    }
    
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        renderYelp(result);

    } catch (error) {
        console.error(error);
    }

}

/*localStorage.setItem("overall1", "");
const scoreId = localStorage.getItem("overall1");

localStorage.setItem("name1", "");
const nameId = localStorage.getItem("name1");*/




async function getInfo(searchType) {
    const apiUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${searchType}`
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        const resources = data.Result.Resources.Resource || [];
        console.log(resources);

        for (let i = 0; i < resources.length; i = i + 3) {
            const resource = resources[i];
            console.log(resource);

            const dailyRead = `
            <div>
                <h3>${resource.Title}</h3>
                <p>${resource.Sections.section[0].Content}</p>
            </div>
            `
            $('#med-container').append(dailyRead); 
        
        }


    })
}



function init() {

    const scores = JSON.parse(localStorage.getItem('scores')) || null;
    const localLive = JSON.parse(localStorage.getItem('clientData')).zip || null;
    console.log('BOOMSAUCE');


    if (!scores) {
        console.log('no params')
        location.replace('./index.html');
        return;
    }


    let hightestScoreType = 'depression';
    let currentTopScore = 0;



    for (const score in scores) {
        const value = scores[score];
        console.log(value, currentTopScore);
        if (value > currentTopScore) {
            hightestScoreType = score;
            currentTopScore = value;
        }
        const testResults = `
        <div> 
        <p>${hightestScoreType}</p>
        <p>${currentTopScore}</p>
        </div>`
        $('#infoRabbit').append(testResults);
    }


    const searchTerm = {
        depression: 'health clinic',
        anxiety: 'health clinic',
        ptsd: 'health clinic',
        addiction: 'health clinic',    
    };

    getDoc(searchTerm[hightestScoreType], localLive)
    getInfo(hightestScoreType);
};

init();