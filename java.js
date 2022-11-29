body = document.getElementById("body")

async function getIranTime(){
    const res = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Tehran`)
    const data = await res.json()
    time = data.datetime.slice(11,-13)
    document.getElementById("irantime").textContent = time
}
async function getLondonTime(){
    const res = await fetch(`http://worldtimeapi.org/api/timezone/Europe/London`)
    const data = await res.json()
    time = data.datetime.slice(11,-13)
    console.log(time)
}



        fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=iran")
        .then(res => res.json())
        .then(data => {
         body.style.backgroundImage = `url(${data.urls.regular})`
    

    }).catch(e => {
        body.style.backgroundImage = `url("./main.png")`
    })


    getIranTime()
    getLondonTime()

        
  fetch("https://api.coingecko.com/api/v3/coins/01coin")   
  .then(res => res.json())
  .then(data => {
   console.log(data.market_data.current_price.gbp)


}).catch(e => {
  console.log(e)
})
    






const invertColor = (bg) => {
	bg=parseInt(Number(bg.replace('#', '0x')), 10)
  bg=~bg
  bg=bg>>>0
  bg=bg&0x00ffffff
  bg='#' + bg.toString(16).padStart(6, "0")
  
  return bg
}


