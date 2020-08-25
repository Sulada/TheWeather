function searchCityName(cityName) {
    // api key
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&cnt=50&appid=d7201dda80f3552702d151fb4f10e857&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Print to console
      console.log(response);

      var cityName = $("<h2>").text(response.city.name + " ") 
      var todayDate = new Date(response.list[0].dt_txt);
      var tempToday= $("<div>").text("Temperature: " + response.list[0].main.temp + " °F");
      var humiToday = $("<div>").text("Humidity: " + response.list[0].main.humidity);
      var windToday =$("<div>").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
      var descripToday = $("<div>").text("Description: " + response.list[0].weather[0].description);

      var weatherIcon = response.list[0].weather[0].icon;
      var iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

      //--------------------------------------------------------------------------------------------------
      
      var firstDate = new Date(response.list[8].dt_txt);
      var weatherIcon1 = response.list[8].weather[0].icon;
      var iconURL1 = "http://openweathermap.org/img/w/" + weatherIcon1 + ".png";
      var tempFirst = $("<div>").text("Temperature: " + response.list[8].main.temp + " °F");
      var humiFirst = $("<div>").text("Humidity: " + response.list[8].main.humidity);

      var secDate = new Date(response.list[16].dt_txt);
      var weatherIcon2 = response.list[0].weather[0].icon;
      var iconURL2 = "http://openweathermap.org/img/w/" + weatherIcon2 + ".png";
      var tempSec  = $("<div>").text("Temperature: " + response.list[16].main.temp + " °F");
      var humiSec = $("<div>").text("Humidity: " + response.list[16].main.humidity);

      var thirdDate = new Date(response.list[24].dt_txt);
      var weatherIcon3 = response.list[0].weather[0].icon;
      var iconURL3 = "http://openweathermap.org/img/w/" + weatherIcon3 + ".png";
      var tempThird  = $("<div>").text("Temperature: " + response.list[24].main.temp + " °F");
      var humiThird = $("<div>").text("Humidity: " + response.list[24].main.humidity);

      var fourdDate = new Date(response.list[32].dt_txt);
      var weatherIcon4 = response.list[0].weather[0].icon;
      var iconURL4 = "http://openweathermap.org/img/w/" + weatherIcon4 + ".png";
      var tempFour  = $("<div>").text("Temperature: " + response.list[32].main.temp + " °F");
      var humiFour  = $("<div>").text("Humidity: " + response.list[32].main.humidity);

      var fifthDate = new Date(response.list[39].dt_txt);
      var weatherIcon5 = response.list[0].weather[0].icon;
      var iconURL5 = "http://openweathermap.org/img/w/" + weatherIcon5 + ".png";
      var tempFifth  = $("<div>").text("Temperature: " + response.list[39].main.temp + " °F");
      var humiFifth = $("<div>").text("Humidity: " + response.list[39].main.humidity);

    

      // clear div before append the weather Information
      $("#city-div").empty();
      $("#city-div").append(cityName,todayDate.toLocaleDateString(),tempToday,humiToday,windToday,descripToday);
      $("#weatherIcon").attr("src", iconURL);
    
      $("#header").empty();
      $("#header").append("5 Day Forecast");

      $("#firstDay-div").empty();
      $("#firstDay-div").append(firstDate.toLocaleDateString(),tempFirst,humiFirst);
      $("#weatherIcon1").attr("src", iconURL1);

      $("#secondDay-div").empty();
      $("#secondDay-div").append(secDate.toLocaleDateString(),tempSec,humiSec);
      $("#weatherIcon2").attr("src", iconURL2);

      $("#thirdDay-div").empty();
      $("#thirdDay-div").append(thirdDate.toLocaleDateString(),tempThird,humiThird);
      $("#weatherIcon3").attr("src", iconURL3);

      $("#fourDay-div").empty();
      $("#fourDay-div").append(fourdDate.toLocaleDateString(),tempFour,humiFour);
      $("#weatherIcon4").attr("src", iconURL4);

      $("#fifthDay-div").empty();
      $("#fifthDay-div").append(fifthDate.toLocaleDateString(),tempFifth,humiFifth);
      $("#weatherIcon5").attr("src", iconURL5);
    });
  }

  $("#select-city").on("click", function(event) {
    event.preventDefault();
    var inputCity = $("#city-input").val().trim();

    searchCityName(inputCity);
  });
