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

async function background(){
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=iran")
    const data = await res.json()
    console.log(data)
    const backgroundURL=data.urls.regular
    body.style.backgroundImage = `url(${backgroundURL})`
    
   
}



getIranTime()
getLondonTime()
background()

const invertColor = (bg) => {
	bg=parseInt(Number(bg.replace('#', '0x')), 10)
  bg=~bg
  bg=bg>>>0
  bg=bg&0x00ffffff
  bg='#' + bg.toString(16).padStart(6, "0")
  
  return bg
}
