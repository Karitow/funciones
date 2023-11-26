/*cambiar color div*/
const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
 
const color = (event) =>  {event.target.style.backgroundColor = "black";
};

azul.addEventListener("click", color);
rojo.addEventListener("click", color);
verde.addEventListener("click", color);
amarillo.addEventListener("click", color);


/*div nuevo*/
const blanco = document.getElementById('key');

function nuevo (color){
    const divNuevo = document.createElement('div');
    divNuevo.style.width = '200px'
    divNuevo.style.height = '200px'
    divNuevo.style.backgroundColor = color
    divNuevo.style.border = '1px solid black'
    
    document.body.appendChild(divNuevo);  
}
   
document.addEventListener("keydown", function (event) { 
    if (event.key === "a") {
    blanco.style.backgroundColor = "pink"
} else if (event.key === "s") { 
    blanco.style.backgroundColor = "orange"
} else if (event.key === 'd') { 
    blanco.style.backgroundColor = 'skyblue'
} else if (event.key === 'q') { 
    nuevo('purple')
} else if (event.key === 'w') { 
    nuevo('gray')
} else if (event.key === 'e') { 
    nuevo('brown')
}})