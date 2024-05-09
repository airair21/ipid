
// $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-94.04&appid=d5edf94e431f5e5afc9ac2c34acc6841', function(data) {
//     console.log(data);

//     console.log(data.wind.deg);
//     console.log(data.clouds);

//     console.log(data.wind.speed);
//     console.log(data.wind.pressure)

//     var degrees = data.wind.deg;
//     var clouds = data.clouds;
//     var wind = data.wind.speed;
//     var pressure = data.main.pressure;

//     $(".degree-container").text("wind degree (direction): " + degrees);
//     $(".wind-container").text("wind speed (mph): " + wind);
//     $(".pressure-container").text("atmospheric pressure: " + pressure);



// });

// use this data to make a visualization of the wind 
// use the wind speed, atmospheric pressure (this will help us think about particles in the air), and wind direction as variables to inform your visualization
// you can use p5js or jquery to help you 

//In class exercise: We'll have a quick review at the end of class. 


$.getJSON('https://ipapi.co/json/', function(data) {

    console.log(data);

    console.log(data.ip);
    console.log(data.city);

    // console.log(data.wind.speed);
    // console.log(data.wind.pressure)
    


    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-94.04&appid=d5edf94e431f5e5afc9ac2c34acc6841', function(data2) {
        console.log(data2);

        var weather = data2.wind.speed;
        // HELP
        console.log(weather);
    
    

        // $(".degree-container").text("wind degree (direction): " + data.city + data.region + data.country_code_iso3 + data.postal);
        // $(".wind-container").text("latitude: " + data.latitude + " latitude: " + data.longitude);

        $("#country").text(data.country_code_iso3);
        $("#weather").text(data2.weather[0].description);
        $("#city").text(data.city);
        $("#district").text(data.region);
        $("#zip").text(data.postal);
        $("#coords").text(data.latitude+" " + data.longitude);
        $("#ip").text(data.ip);
        // $(".pressure-container").text("atmospheric pressure: " + pressure);





        // document.getElementById("country").onmouseover=change();
        // document.getElementById("country")=change();
        // function change(){
        //     Element.classList.toggle("hover");
        // }
        
        // document.getElementById("country").addEventListener("mouseover", function() {
        //     this.classList.add("hover");
        // });


    })
});


function capturePhoto() {
    // Your existing code to capture photo
  }
  
  window.onload = function() {
      displayIDCard();
    };
  
    function displayIDCard() {
      let idcontainer = document.getElementById('container');
      let idTextDiv = document.getElementById('idText');
  
      let photoDataURL = localStorage.getItem('capturedPhotoData');

      $.getJSON('https://ipapi.co/json/', function(data) {
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-94.04&appid=d5edf94e431f5e5afc9ac2c34acc6841', function(data2) {
    
  
            idcontainer.innerHTML = `
            <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;  ">
            `;
        
            idTextDiv.innerHTML = `
                <h2><span>I</span>dentification <span>C</span>ard</h2>
            `;}
      )}

      
    )};







// {
//     "coord":
//         {"lon":-94.04,"lat":33.4},
//     "weather":
//         [
//             {"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}
//         ],
//     "base":"stations",
//     "main":
//         {"temp":295,"feels_like":295.41,"temp_min":294.14,"temp_max":295.23,"pressure":1010,"humidity":83},
//     "visibility":10000,
//     "wind":
//         {"speed":1.34,"deg":191,"gust":4.92},
//     "clouds":
//         {"all":75},
//     "dt":1714669142,"sys":{"type":2,"id":62880,"country":"US","sunrise":1714649184,"sunset":1714697976},"timezone":-18000,"id":4736096,"name":"Texarkana","cod":200}