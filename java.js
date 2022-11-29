unsplashURL = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
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
    console.log(time)
}

async function background(){

    const res = await fetch(unsplashURL)
    const data = await res.json()
    const background =  data.urls.small_s3
    return background
}




(async () => {
    
    getIranTime()
    getLondonTime()
    getback = await background()
    document.getElementById("body").style.backgroundImage=`url(${getback})`

})()


