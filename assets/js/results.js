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

    try {
        // const response = await fetch(url, options);
        // const result = await response.text();

        // renderYelp(result);

    } catch (error) {
        console.error(error);
    }

}

function getInfo(searchType) {

    const url = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${searchType}`

}
// getDoc('health clinic', 'new york');

function renderYelp(result) {
    console.log(result);

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

    const scores = JSON.parse(localStorage.getItem('scores')) || null;
    // get clientData from localStorage


    if (!scores) {
        console.log('no params')
        location.replace('./index.html');
        return;
    }

    let hightestScoreType = 'depression';
    let currentTopScore = 0;

    const searchTerm = {
        depression: 'health clinic',
        anxiety: 'health clinic',
        ptsd: 'health clinic',
        addiction: 'health clinic'
    };


    for (const score in scores) {
        const value = scores[score];
        console.log(value, currentTopScore);
        if (value > currentTopScore) {
            hightestScoreType = score;
            currentTopScore = value;
        }
    }

    console.log(hightestScoreType);

    getDoc(searchTerm[hightestScoreType], '37209')
    getInfo(hightestScoreType);
};
    
    // init();
    
