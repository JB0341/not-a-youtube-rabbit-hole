//let currentDataId = 1;

//form next dynamic page for submit
//$('.next-btn').on('click', function(event) {
//event.preventDefault();
//if (currentDataId === 5) {
//     console.log('Thank You For Submitting');

//    return;
//  };

//  $(`#${currentDataId}`).addClass('d-none');
//  currentDataId++;
//  $(`#${currentDataId}`).removeClass('d-none');
//  console.log(currentDataId);

//});

$(document).ready(function () {
   $("#call1").click(function () {
      alert("1-800-273-8255");
   });

   $('#tabclick').click(function () {
      window.open('https://www.tn.gov/behavioral-health/substance-abuse-services/treatment---recovery/treatment---recovery/prescription-for-success/warning-signs-of-drug-abuse.html', '_blank');
   });

   $('#tabclick1').click(function () {
      window.open('https://smartrecovery.org/', '_blank');
   });

   $('#tabclick2').click(function () {
      window.open('https://www.dea.gov/recovery-resources', '_blank');
   });
   
   $('#tabclick3').click(function () {
      window.open('https://www.samhsa.gov/', '_blank');
   });
});
