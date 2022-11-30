const body = document.getElementById("body")
body.style.backgroundColor = "#E1EDEF"
const input = document.getElementById("inputsearch")

navigator.geolocation.getCurrentPosition(position => {

  const long = position.coords.longitude
  const lat = position.coords.latitude
  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${long}&units=metric`)
        
        .then(res => res.json())
        .then(data => {
         
          iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById("yweatherwrap").innerHTML = `
          <img id="yicon"src="${iconurl}">
          <p id="yname">${data.name}</p>
          <p id="ytemp">Temp: ${Math.round(data.main.temp)}°</p>
          <p id="yhum">Humidity: ${data.main.humidity}%</p>
          `

        })

});


  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=29.61&lon=52.53&units=metric`)
        
        .then(res => res.json())
        .then(data => {
          
          iconurl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById("shiraztemp").innerHTML = `
          <img id="yicon"src="${iconurl}">
          <p id="yname">${data.name}</p>
          <p id="ytemp">Temp: ${Math.round(data.main.temp)}°</p>
          <p id="yhum">Humidity: ${data.main.humidity}%</p>`
          

        })






        fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=iran")
        
        .then(res => res.json())
        .then(data => {
        body.style.backgroundImage = `url(${data.urls.regular})`
    }).catch(e => {
         body.style.backgroundImage = `url("./main.png")`

    })


    async function getIranTime(){
      const res = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Tehran`)
      const data = await res.json()
      time = data.datetime.slice(11,-16)
      document.getElementById("irantime").textContent = time
  }
  async function getLondonTime(){
      const res = await fetch(`http://worldtimeapi.org/api/timezone/Europe/London`)
      const data = await res.json()
      time = data.datetime.slice(11,-16)

      document.getElementById("londontime").textContent = time

  }

  getIranTime()
  getLondonTime()

  setInterval(getIranTime, 60000) 
  setInterval(getLondonTime, 60000) 
  

        
fetch("http://api.navasan.tech/latest/?api_key=freeawVldcKZKlXxKITzsMVwk3A1J9Wu ")   
  .then(res => {
    if (!res.ok) {
        throw Error("Something went wrong")
    }
    return res.json()
})
  .then(data => {

    let gbp = data.gbp.value
    let us = data.usd_sell.value
    let seke = data.sekkeh.value
    let date = data.gbp.date

  document.getElementById("pricetoGBP").textContent = "Pond Price:   " + (gbp/1000).toFixed(3) + "   قیمت پوند"
  document.getElementById("priceDollor").textContent = "Dollar Price:   " + (us/1000).toFixed(3)+ "   قیمت دلار"
  document.getElementById("priceSeke").textContent = "Coin Price:   " + (seke/1000).toFixed(6)+ "   قیمت سکه"
  document.getElementById("currency").textContent = "Currency Price on " + date


}).catch(e => {
  document.getElementById("currency").textContent = "Currency is not available at this time"
})


document.getElementById("Gsearch").addEventListener("click",function(){
  window.open(`http://google.com/search?q=${input.value}`);
})








