const unsplashURL = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
const body = document.getElementById("body")

async function getIranTime(){
    const res = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Tehran`)
    const data = await res.json()
    time = data.datetime.slice(11,-13)
    console.log(time)
}
async function getLondonTime(){
    const res = await fetch(`http://worldtimeapi.org/api/timezone/Europe/London`)
    const data = await res.json()
    time = data.datetime.slice(11,-13)
}

async function background(){
    const res = await fetch(unsplashURL)
    const data = await res.json()
    console.log(data)
}





const invertColor = (bg) => {
	bg=parseInt(Number(bg.replace('#', '0x')), 10)
  bg=~bg
  bg=bg>>>0
  bg=bg&0x00ffffff
  bg='#' + bg.toString(16).padStart(6, "0")
  
  return bg
}
