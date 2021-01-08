

const body=document.body;
let divContainer=document.querySelector('.container-fluid');

//bloques
const bloques = ['Constitución', 'Cuerpos y fuerzas de seguridad', 'Tráfico', 'Código Penal']
const temasConstitucion = ['tema Constitucion 1', 'tema 2', 'tema 3', 'tema 4', 'tema 5', 'tema 6', 'tema 7'];
const temasCuerposYFuerzasSeguridad = ['tema Cuerpos y fuerzas', 'tema 2', 'tema 3', 'tema 4', 'tema 5', 'tema 6', 'tema 7'];
const temasTrafico= ['tema Trafico', 'tema 2', 'tema 3', 'tema 4', 'tema 5', 'tema 6', 'tema 7'];
const temasCodigoPenal = ['tema Codigo Penal', 'tema 2', 'tema 3', 'tema 4', 'tema 5', 'tema 6', 'tema 7'];


const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
            `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

const dibujarTemas = (temaArr) =>{
    const li = devolverListado(temaArr);
    divContainer.innerHTML=li;
}




const dibujarInicio = () =>{

    const html=`
        <h1 class="text-white">Oposiciones Policia Local</h1>
        <h4 class="text-white p-2">Elige Bloque para estudiar</h4>
        <ul class="mt-2">
       ${devolverListado(bloques)}
        </ul>`;

    divContainer.innerHTML=html;
    devolverListado(bloques);

}


const eventos = () =>{

    const ul =document.querySelector('ul');

    ul.addEventListener('click', (event)=>{
        
        limpiarElemento(event.target.parentNode);

        let bloque=(event.target.textContent == bloques[0]) ? dibujarTemas(temasConstitucion):
                   (event.target.textContent == bloques[1]) ? dibujarTemas(temasCuerposYFuerzasSeguridad):
                   (event.target.textContent == bloques[2]) ? dibujarTemas(temasTrafico):
                   (event.target.textContent == bloques[3]) ? dibujarTemas(temasCodigoPenal):  null;
        
        if(bloque) console.log(bloque);

        //console.log(bloque);
        
        
        
    });

   

}

//limpiamos elemento capturado en el que hacemos clic
const limpiarElemento = (elem) =>{
    elem.textContent='';
}


const init = () =>{
    dibujarInicio();
    eventos();
}

export {
    init 
}