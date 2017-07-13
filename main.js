$(document).ready(function(){
 var lat;
 var long;
 $.getJSON("http://ip-api.com/json", function(data2){
	lat=data2.lat;
	long=data2.lon;
  var api='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=3d93744225052e2f91b94242522f243f';
  $.getJSON(api, function(data){
	  
	var weatherType = data.weather[0].description;
	var kTemp = data.main.temp;
	var windSpeed=data.wind.speed;
	var city = data.name;
	var tempSwap=true;
	var iconCode = data.weather[0].icon;
	var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
	//change background  Image
	var weatherID = data.weather[0].id;
    changeWeatherImg(weatherID);
	
	fTemp = Math.round((kTemp)*(9/5)-459.67);
	cTemp = Math.round(kTemp-273);
    $('#city').html(city);
	$('#weatherType').html(weatherType);
	$('#fTemp').html(fTemp + "&#8457;");
	$('#fTemp').click(function(){
		
	if(tempSwap===false){
	   $('#fTemp').html(fTemp + " &#8457;");
	    tempSwap=true;
	} else {	  	
	   $('#fTemp').html(cTemp + " &#8451;");
          tempSwap=false;		  
	}	
	});
	windSpeed = Math.round(2.237*(windSpeed));
	$('#windSpeed').html(windSpeed + " mph");
	$(".icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
	
	//function to change backgroundImage depending on the weather("https://openweathermap.org/weather-conditions")
	
function changeWeatherImg(weatherID){
  if(weatherID <= 299){ 
    $('.jumbotron').css('background-image', 'url(images/thunderstorm.jpg)');
    return;
  }
  if(weatherID <= 599){ 
    $('.jumbotron').css('background-image', 'url(images/drizzle.jpg)');
    return
  }
  if(weatherID <= 699){ 
    $('.jumbotron').css('background-image', 'url(images/snow.jpg)');
    $('#snowfall').css;
    return
  }
  if(weatherID <= 799){ 
    $('.jumbotron').css('background-image', 'url(images/atmosphere.jpg');
    return
  }
  if(weatherID == 800){ 
    $('.jumbotron').css('background-image', 'url(images/clearsky.jpg)');
    return
  }
  if(weatherID <= 899){ 
    $('.jumbotron').css('background-image', 'url(images/clouds.jpg)');
    return
  }
  if(weatherID <= 906){ 
    $('.jumbotron').css('background-image', 'url(images/storm.jpg)');
    return
  }
  if(weatherID <= 955){ 
    $('.jumbotron').css('background-image', 'url(images/breeze.jpg)');
    return
  }
  if(weatherID <= 962){ 
    $('.jumbotron').css('background-image', 'url(images/highwinds.jpg)');
    return
  }
} 
	
		
  });
  });
});
