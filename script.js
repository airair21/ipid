
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

        // $("#country").text(data.country_code_iso3);
        // $("#weather").text(data2.weather[0].description);
        // $("#city").text(data.city);
        // $("#district").text(data.region);
        // $("#zip").text(data.postal);
        // $("#coords").text(data.latitude+"N " + data.longitude+"W");
        $("#ip").text("address: " + data.ip);
        // $(".pressure-container").text("atmospheric pressure: " + pressure);


        countryAppearBool = false;

        $('#country').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    'animation': 'flip 1s'
                });
                $(this).text(data.country_code_iso3)
            }
            // console.log(countryAppearBool)
            console.log(countryAppearBool)
        });
        $('#weather').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    // 'animation': 'flip 1s'
                });
                $(this).text(data2.weather[0].description)
            }
        });
        $('#city').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    // 'animation': 'flip 1s'
                });
                $(this).text(data.city)
            }
        });
        $('#district').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    // 'animation': 'flip 1s'
                });
                $(this).text(data.region)
            }
        });
        $('#zip').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    // 'animation': 'flip 1s'
                });
                $(this).text(data.postal)
            }
        });
        $('#coords').on('mouseenter', function(){
            if(countryAppearBool){
                countryAppearBool = false;
            }
            else if(!countryAppearBool){
                countryAppearBool = true;
                //code to display the words 
                $(this).css({
                    'background-color': 'black',
                    'color': 'white',
                    // 'animation': 'flip 1s'
                });
                $(this).text(data.latitude+ " " + data.longitude)
            }
        });

        const latitude = data.latitude; // Assuming the API response contains latitude
            const longitude = data.longitude; // Assuming the API response contains longitude

            // Create a Google Maps link with the latitude and longitude
            const googleMapsLink = `https://www.google.com/maps/search/${latitude},${longitude}`;

            // Display the link with an arrow image
            // $(this).html(`<div class="location"><a target="_blank" href="${googleMapsLink}"><img src="arrow.png"></a>`);
            $('#goog').on('mouseenter', function(){
                if(countryAppearBool){
                    countryAppearBool = false;
                }
                else if(!countryAppearBool){
                    countryAppearBool = true;
                    //code to display the words 
                    $(this).css({
                        'background-color': 'black',
                        'color': 'white',
                        // 'animation': 'flip 1s'
                    });
                    $(this).html(`<a target="_blank" href="${googleMapsLink}"> <div class="location">   <h2> location </h2> <iframe src="${googleMapsLink}" frameborder="0"></iframe> </a>`);
                    // <a target="_blank" href="${googleMapsLink}"></a>
                    // $('#google').html(`
                    // <a target="_blank" href="${googleMapsLink}">
                    //     <div class="card-inner">
                    //     <div class="card-front"> </div>
                    //     <div class="card-back" id="goog">
                    //     <iframe src="${googleMapsLink}" frameborder="0"></iframe> 
                    //     </div>
                    //     </div> </a>`)
                }
            });

            const catPhrases = [
                "hmm...",
                "reading the aura",
                "trying to predict",
                "I'm concentrating here",
                "Yes you can rely on me, duh!",
            ];
            
            let currentIndex = 0;
            const catPhraseElement = document.getElementById('photo-talk');
            
            function changeCatPhrase() {
                catPhraseElement.innerHTML = `
                    <div class="cont" syle="height:5vh;width:auto;">
                        <h3 class="typed" style="padding:10%">${catPhrases[currentIndex]}</h3>
                    </div>
                `;
                currentIndex = (currentIndex + 1) % catPhrases.length;
            }
            
            // Initial call to set the first cat phrase
            changeCatPhrase();
            
            // Change cat phrase every 5 seconds
            setInterval(changeCatPhrase, 5000);
            
              





        // const modifiedJson = json.map((obj) => {
        //     const lines = obj.line.split('-');
        //     if (lines.length > 1 && /^\d+$/.test(lines[0]) && /^\d+$/.test(lines[1])) {
        //     const start = parseInt(lines[0]);
        //     const end = parseInt(lines[1]);
        //     obj.line = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        //     } else {
        //     obj.line = obj.line.replace(/-/g, ', ').split('');
        //     }
        //     return obj;
        //     }).sort((a, b) => b.the_geom.coordinates[1] - a.the_geom.coordinates[1]); // sort by descending order of firstValue;
            
        //     console.log(modifiedJson);
            
            
            
            
            
        //     // const firstValue = entrance.the_geom.coordinates[0]; // access coordinates array of the entrance object
        //     // const secondValue = entrance.the_geom.coordinates[1]; // access coordinates array of the entrance object
        //     const latitude = data.latitude; // Assuming the API response contains latitude
        //     const longitude = data.longitude; // Assuming the API response contains longitude

        //     // Create a Google Maps link with the latitude and longitude
        //     const googleMapsLink = `https://www.google.com/maps/search/${latitude},${longitude}`;

        //     // Display the link with an arrow image
        //     $('#goog').html(`<div class="location"><a target="_blank" href="${googleMapsLink}"><img src="arrow.png"></a>`);
        });


            // $('#goog').on('mouseenter', function(){
            //     if(countryAppearBool){
            //         countryAppearBool = false;
            //     }
            //     else if(!countryAppearBool){
            //         countryAppearBool = true;
            //         //code to display the words 
            //         $(this).css({
            //             'background-color': 'green',
            //             'color': 'white',
            //             // 'animation': 'flip 1s'
            //         });
            //         $(this).innerHTML {
            //             `<div class="location"><a target="_blank" href="https://www.google.com/maps/search/${secondValue},+${firstValue}"><img src="arrow.png"></a>`
            //         }
            //     }
            // });





        // document.getElementById("country").onmouseover=change();
        // document.getElementById("country")=change();
        // function change(){
        //     Element.classList.toggle("hover");
        // }
        
        // document.getElementById("country").addEventListener("mouseover", function() {
        //     this.classList.add("hover");
        // });


        const player = document.getElementById('player');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const captureButton = document.getElementById('capture');
        
        const constraints = {
            video: true,
        };
        
        // Attach the video stream to the video element and autoplay.
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                player.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing the camera: ', error);
            });
        
        captureButton.addEventListener('click', () => {
            // Draw the video frame to the canvas.
            context.drawImage(player, 0, 0, canvas.width, canvas.height);
            
            // Store the captured photo data in localStorage
            localStorage.setItem('capturedPhotoData', canvas.toDataURL('image/jpeg'));
            console.log("done")
            
            // Redirect to the next page (id.html)
            window.location.href = 'cards.html';
        });

        // let photoDataURL = localStorage.getItem('capturedPhotoData');
        // let idcontainer = document.getElementById('container');
        // idcontainer.innerHTML = `
        // <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;  ">`;

    });


// function capturePhoto() {
//     // Your existing code to capture photo
//   }
  
//   window.onload = function() {
//       displayIDCard();
//     };
  
//     function displayIDCard() {
//       let idcontainer = document.getElementById('container');
//       let idTextDiv = document.getElementById('idText');
  
//       let photoDataURL = localStorage.getItem('capturedPhotoData');

//       $.getJSON('https://ipapi.co/json/', function(data) {
//         $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-94.04&appid=d5edf94e431f5e5afc9ac2c34acc6841', function(data2) {
    
  
//             idcontainer.innerHTML = `
//             <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;  ">
//             `;
        
//             idTextDiv.innerHTML = `
//                 <h2><span>I</span>dentification <span>C</span>ard</h2>
//             `;}
//       )}

      
//     )};







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