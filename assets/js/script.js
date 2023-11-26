/* funcion pintar*/
function pintar(event){
    const element = event.target;
    element.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);


