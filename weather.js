let search=document.getElementById('search'); //input tag
let cityname=document.getElementById('cityname');
let temp=document.getElementById('temp');
//let inputvalue=search.value

let getInfo=async()=>{
   // e.preventDefault()//prevent reloading of the page
   // alert("its working...!");
   let inputvalue=search.value
   if(inputvalue==""){
    //error message
    alert("please enter a city name before search")
   }else{
    //fetch the data
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    let response=await fetch(url)
    let data=await response.json()//fetching only json from api response
   //console.log(data);
   cityname.textContent=`${data.name}/${data.sys.country}`
   temp.textContent=data.main.temp
   }
}
