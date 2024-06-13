(function () {
    let currentDataId = 1;
    let overallScore = 0;


    function addClientData() {
        let data = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim(),
            phone: $('#phone').val().trim(),
        }

        localStorage.setItem('clientData', JSON.stringify(data));
    }

    $('.next-btn').on('click', function (event) {
        console.log('POW')
        event.preventDefault();
        if (currentDataId === 5) {
            console.log('Thank You For Submitting');
            addClientData();
            // gather all variables
            const dep1 = +$('#dep1').val();
            const dep2 = +$('#dep2').val();
            const dep3 = +$('#dep3').val();
            const dep4 = +$('#dep4').val();
            const dep5 = +$('#dep5').val();
            const dep6 = +$('#dep6').val();
            const dep7 = +$('#dep7').val();
            const dep8 = +$('#dep8').val();
            const dep9 = +$('#dep9').val();
            const dep10 = +$('#dep10').val();

            const totalDepValue = dep1 + dep2 + dep3 + dep4 + dep5 + dep6 + dep7 + dep8 + dep9 + dep10;
            const avgDepValue = totalDepValue / 10;
            // loop over arrOfDep and add values to totalDepValue
            // tally up scores
            const ptsd1 = +$('#ptsd1').val();
            const ptsd2 = +$('#ptsd2').val();
            const ptsd3 = +$('#ptsd3').val();
            const ptsd4 = +$('#ptsd4').val();
            const ptsd5 = +$('#ptsd5').val();

            const totalPtsdValue = ptsd1 + ptsd2 + ptsd3 + ptsd4 + ptsd5;

            const avgPtsd = totalPtsdValue / 5;

            //loop over arrOfPtsd and add values to totalPtsdValue
            //tally up scores

            const anxiety1 = +$('#anxiety1').val();
            const anxiety2 = +$('#anxiety2').val();
            const anxiety3 = +$('#anxiety3').val();
            const anxiety4 = +$('#anxiety4').val();
            const anxiety5 = +$('#anxiety5').val();
            const anxiety6 = +$('#anxiety6').val();
            const anxiety7 = +$('#anxiety7').val();

            const totalAnxietyValue = anxiety1 + anxiety2 + anxiety3 + anxiety4 + anxiety5 + anxiety6 + anxiety7;
            const avgAnxiety = totalAnxietyValue / 7;

            //loop over arrOfAnxiety and add values to totalAnxietyValue

            //tally up scores

            const addiction1 = +$('#addiction1').val();
            const addiction2 = +$('#addiction2').val();
            const addiction3 = +$('#addiction3').val();
            const addiction4 = +$('#addiction4').val();
            const addiction5 = +$('#addiction5').val();

            const totalAddictionValue = addiction1 + addiction2 + addiction3 + addiction4 + addiction5;
            const avgAddiction = totalAddictionValue / 5;

            overallScore = 0;
        };

        console.log('FORM', currentDataId);

        $(`#form${currentDataId}`).addClass('d-none');
        currentDataId++;
        $(`#form${currentDataId}`).removeClass('d-none');
        console.log(currentDataId);

    });

    $(document).ready(function () {
        $("#form1").on('next', addClientData);
    })




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
})();