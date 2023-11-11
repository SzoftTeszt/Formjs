const state={
    kitalalando:-1,

}

var uzenet

if (state.kitalalando==-1)
    {
        state.kitalalando=Math.floor(Math.random() * 98)+1
        // document.getElementById("kitalalando").innerHTML=state.kitalalando
        
        uzenet= document.getElementById("uzenet")
        uzenet.style.display="none"
    }


document.getElementById("urlap").onsubmit=function(event){
    event.preventDefault()

    // let elemek= event.target.elements
    // console.log("elemek",elemek[0].value)
    // console.log("elemek",elemek.tipp.value)

    tipp=document.getElementById("tipp")
    console.log("elemek",tipp)

    message=""
    if (state.kitalalando>Number(tipp.value)) message="A szám nagyobb, mint a tipped!"
    else if (state.kitalalando<Number(tipp.value)) message="A szám kisebb, mint a tipped!"
        else {
            message="Gratulálok! Kitaláltad, te egy zseni vagy!!! (Új Játék - F5)"
            tipp.disabled=true
        }

    uzenet.innerHTML=message    
    uzenet.style.display="block"
}