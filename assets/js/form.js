(function () {
    let currentDataId = 1;
    let overallScore = 0;


    function addClientData() {
        let data = {
            firstName: $('#inputFirstName4').val().trim(),
            lastName: $('#inputLastName4').val().trim(),
            email: $('#inputEmail4').val().trim(),
            phone: $('#phoneNumber4').val().trim(),
            zip: $('#zipcode4').val().trim(),
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
            const dep1 = +$('#dep1').val() ?? 0;
            const dep2 = +$('#dep2').val() ?? 0;
            const dep3 = +$('#dep3').val() ?? 0;
            const dep4 = +$('#dep4').val() ?? 0;
            const dep5 = +$('#dep5').val() ?? 0;
            const dep6 = +$('#dep6').val() ?? 0;
            const dep7 = +$('#dep7').val() ?? 0;
            const dep8 = +$('#dep8').val() ?? 0;
            const dep9 = +$('#dep9').val() ?? 0;
            const dep10 = +$('#dep10').val() ?? 0;

            const totalDepValue = dep1 + dep2 + dep3 + dep4 + dep5 + dep6 + dep7 + dep8 + dep9 + dep10;
            const avgDepValue = totalDepValue / 10;
            // loop over arrOfDep and add values to totalDepValue
            // tally up scores
            const ptsd1 = +$('#ptsd1').val() ?? 0;
            const ptsd2 = +$('#ptsd2').val() ?? 0;
            const ptsd3 = +$('#ptsd3').val() ?? 0;
            const ptsd4 = +$('#ptsd4').val() ?? 0;
            const ptsd5 = +$('#ptsd5').val() ?? 0;

            const totalPtsdValue = ptsd1 + ptsd2 + ptsd3 + ptsd4 + ptsd5;

            const avgPtsd = totalPtsdValue / 5;

            //loop over arrOfPtsd and add values to totalPtsdValue
            //tally up scores

            const anxiety1 = +$('#anxiety1').val() ?? 0;
            const anxiety2 = +$('#anxiety2').val() ?? 0;
            const anxiety3 = +$('#anxiety3').val() ?? 0;
            const anxiety4 = +$('#anxiety4').val() ?? 0;
            const anxiety5 = +$('#anxiety5').val() ?? 0;
            const anxiety6 = +$('#anxiety6').val() ?? 0;
            const anxiety7 = +$('#anxiety7').val() ?? 0;

            
            const totalAnxietyValue = anxiety1 + anxiety2 + anxiety3 + anxiety4 + anxiety5 + anxiety6 + anxiety7;
            const avgAnxiety = totalAnxietyValue / 7;
            console.log(anxiety1)
            console.log(totalAnxietyValue);

            //loop over arrOfAnxiety and add values to totalAnxietyValue

            //tally up scores

            const addiction1 = +$('#addiction1').val() ?? 0;
            const addiction2 = +$('#addiction2').val() ?? 0;
            const addiction3 = +$('#addiction3').val() ?? 0;
            const addiction4 = +$('#addiction4').val() ?? 0;
            const addiction5 = +$('#addiction5').val() ?? 0;

            const totalAddictionValue = addiction1 + addiction2 + addiction3 + addiction4 + addiction5;
            const avgAddiction = totalAddictionValue / 5;

            const scores = {
                addiction: avgAddiction,
                anxiety: avgAnxiety,
                depression: avgDepValue,
                ptsd: avgPtsd
            };
            

            localStorage.setItem('scores', JSON.stringify(scores));

            // move user to results page with the two params
            const queryString = `./results.html`;
    
            location.assign(queryString);
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


})();