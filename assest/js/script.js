let button=document.querySelector('.btn');

let temp=document.querySelector('#temperature');
let loca=document.querySelector('#location');
let humidity=document.querySelector('#humidity');
let windSpeed=document.querySelector('#wind-speed');
let description=document.querySelector('#uvIndex');
let searchForm=document.querySelector('#user-form');
let citySearch=document.querySelector("#search");

let placeDisplay=document.querySelector('.city');

let city=citySearch.value.trim();
/*let api='http://api.openweathermap.org/data/2.5/weather?q='+{city}+'&APPID=';*/
function myFunction (city){

 let   api='http://api.openweathermap.org/data/2.5/weather?q=';
 let   key=`${city}&appid=0964eb5ff2a7dff34c27cd743bb02d0a`;
 
 
 fetch(api+key)
.then(function(response){
    if(response.ok){
     response.json()
.then(function(data){
    console.log(data);
        displayWeather();
        })
        
    
  }
  else {
    console.log("ERRORE");
};
});
                   
}

function displayWeather(data){
    

link="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0964eb5ff2a7dff34c27cd743bb02d0a";

var requestJson =new XMLHttpRequest();

requestJson.open('GET',link,true);


requestJson.onload=function(){
    var obj=JSON.parse(this.response);
    if (requestJson.status>=200 && requestJson.status<400) {

temp.innerHTML=`<div id="temperature"  ><h3>Temperature : ${Math.floor(((obj.main.temp)-273.15)*(9/5)+32)} F / ${Math.floor((obj.main.temp)-273.15)}  C</h3></div>`;
humidity.innerHTML=`<div id="humidity"><h3>Humidity :  ${obj.main.humidity}</h3></div>`;
windSpeed.innerHTML=`<div id="wind-speed" ><h3>Wind Speed :  ${obj.wind.speed}</h3></div>`;
loca.innerHTML=`<div id="location" class="city" >
                         ${obj.name}
                          <div id="description">
                           <h3>Description:  ${obj.weather[0].description}</h3>
                          </div>
                          <div class="icon">${obj.weather[0].icon}</div>
                      </div> `;
    } 
    else{
        console.log('the city does not exist !!');
    }
}

requestJson.send()
    
};


button.addEventListener("click",myFunction(city));