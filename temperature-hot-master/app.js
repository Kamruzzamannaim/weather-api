const API_KEY = `762d3c060c4717e5eee77c808e706a5f`;

const searchTemperature=()=>{
   const searchText=document.getElementById('search-field').value;
   const url= `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>showTemperature(data))
}
const showTemperature=(info)=>{
   console.log(info);
   const cityName= document.getElementById('city-name');
   cityName.innerText=`${info.name}`;
   const temp = document.getElementById('temp').innerText=`${info.main.temp}`;
}