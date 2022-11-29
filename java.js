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
        const backgroundURL= data.urls.regular
        console.log(data)
        body.style.backgroundImage = `url(${backgroundURL})`

    }).catch(err => {
        console.log("Something went wrong! 😭")
        body.style.backgroundImage = `url("https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`

    })


    getIranTime()
    getLondonTime()

        
  
        
 
    






const invertColor = (bg) => {
	bg=parseInt(Number(bg.replace('#', '0x')), 10)
  bg=~bg
  bg=bg>>>0
  bg=bg&0x00ffffff
  bg='#' + bg.toString(16).padStart(6, "0")
  
  return bg
}
