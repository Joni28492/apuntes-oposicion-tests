import {  respuestasArr } from './classes/Flag.class';
import { arrHtmlFlag, capturarEventFlags, flagHtmlFull, flagsBloqueConstitucion } from './db/flags.db';
import { helperTernarios, ternarioBloques } from './helpers';
import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from './temas-list';



//DOM
let divContainer = document.querySelector('#container');
let header = document.querySelector('header');
    header.classList='text-center mt-4 p-2 mb-1';

let btnTests, ul, btnHome;
let flagListDOM;

const htmlPruebaTemas= `
<div class="alert alert-danger">
    <ul>

        <hr>
        <li></li>
        <li></li>
        <li class="btn alert-warning"></li>
        <hr>
       
    </ul>
</div>`;


//esta funcion recibe un html y modifica el DOM, 
//la utilizaremos para la teoria de cada tema
//nos falta añadir los flags 
const dibujarTeoria = (html, titulo='', subtitulo='', bloque='Constitucion') =>{
    
    header.children[0].textContent=titulo;
    header.children[1].textContent=subtitulo;

    divContainer.innerHTML=html;
    
    let btn=document.createElement('button');
    btn.classList='btn  btn-outline-primary mt-2 p-4';
    btn.textContent='Volver al listado de temas';
    btn.id=`Home-${bloque}`;

    divContainer.append(btn);
    
}



//Esta funcion captura un array con los temarios y devulve 
//una cadena de li con esos valores
const devolverListado= ( arr ) =>{

    let cadenaListado='';

    arr.forEach(element => {
        //los cambios a los li se realizan aqui
        cadenaListado+=
        `<li class=" btn list-group-item btn-outline-primary mt-2 p-3">${element}</li>`;    
    });

    return cadenaListado;
}

//inyecta en el html los temas que le pasemos con un array 
//utilizando la funcion devolverListado() en funcion del tema
//tenemos titulo y subtitulo como parametro vacios por defecto
export const dibujarTemas = (temaArr, titulo='', subtitulo='', arrFlags=arrHtmlFlag) =>{

    //hacemos que el lenght del array sea 0,
    //no nos permite igualarlo a []
    //es mas eficiente que hacer un foreach con pop()
    respuestasArr.length=0;
   
    header.innerText='';
    
    header.innerHTML=`<h1 class="text-white">${titulo}</h1>
                      <h4 class="text-white p-2">${subtitulo}</h4>`;
    
    const li = devolverListado(temaArr);
    const btnHome = document.createElement('button');
    btnHome.classList='btn  btn-outline-primary mt-2 p-4';
    btnHome.id='btn-home';

    
    
                           
  

    btnHome.innerText='Página Principal';
    divContainer.innerHTML= `<ul>${li}</ul>`+ flagHtmlFull(arrFlags);
   
    const flagEventDOM =document.querySelectorAll('.flag');
    capturarEventFlags(flagEventDOM);
    
  
    divContainer.append(btnHome);
  
}



//dibujamos los bloques de los temas 
const dibujarInicio = () =>{

    
    header.innerHTML=`<h1 class="text-white">Oposiciones Policia Local</h1>
                      <h4 class="text-white p-2">Elige Bloque para estudiar</h4>`;
    
    const html=`
        ${header}
        <ul>
        ${devolverListado(bloques)}
        </ul>`;

    const testSection = `
        <hr class="bg-light">
        <button id="btn-test" class=" btn  btn-outline-primary mt-2 p-4">Hacer Tests</button>
    `;

    //dibujamos diferentes Flags
    const flagListAddHTML=flagHtmlFull();
    divContainer.innerHTML=html + flagListAddHTML  + testSection ;
   

}

    /**************************/ 
    /**************************/ 
    /*********EVENTOS**********/
    /**************************/ 
    /**************************/ 

const eventos = () =>{

    ul =document.querySelector('ul');
    btnTests = document.querySelector('#btn-test');
    

    

    //EVENTO del listado de bloques(PAGINA INICIAL)
    ul.addEventListener('click', (event)=>{
        
        

        const bloque=
            (event.target.textContent == bloques[0]) 
            ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion):
            (event.target.textContent == bloques[1]) 
            ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
            (event.target.textContent == bloques[2]) 
            ? dibujarTemas(temasTrafico, 'Trafico', 'Trafico seguridad vial'):
            (event.target.textContent == bloques[3]) 
            ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP') : null;
    
        //preveer encapsulacion
        
        

        if(bloque!==null) {
            
            //capturamos el btn Home para volver al inicio
            btnHome=document.querySelector('#btn-home');
            btnHome.addEventListener('click', init);
            ul=document.querySelector('ul');
            //console.log(ul);

            //este evento es para los temas
            ul.addEventListener('click', (event)=>{
                //console.log(event.target.textContent);
                //capturamos el titulo para saber en que tema estamos 
                let tituloBloque=ul.parentNode.parentNode.parentNode.children[1].children[0].children[0].textContent
                //console.log(tituloBloque);
                //pendiente encapsulacion Ternarios
                const tema=(event.target.textContent == temasConstitucion[0])? dibujarTeoria(htmlPruebaTemas, 'titulito', 'subtitulito'):
                           (event.target.textContent == temasConstitucion[1])? console.log('Constitucion II'):
                           (event.target.textContent == temasConstitucion[2])? console.log('Constitucion III'):
                           (event.target.textContent == temasConstitucion[3])? console.log('Tema: Estatuto Autonomia Principado de Asturias'):
                           (event.target.textContent == temasConstitucion[4])? console.log('Tema: Administracion Local'):
                           (event.target.textContent == temasConstitucion[5])? console.log('Tema: Derecho Administrativo'):
                           (event.target.textContent == temasConstitucion[6])? console.log('Tema: Acto administrativo'):
                           (event.target.textContent == temasConstitucion[7])? console.log('Tema: Procedimiento Administrativo'):
                           (event.target.textContent == temasConstitucion[8])? console.log('Tema: Personal al servicio de las corporaciones locales'):
                           (event.target.textContent == temasConstitucion[9])? console.log('Tema: Haciendas Locales'):
                           (event.target.textContent == temasConstitucion[10])? console.log('Tema: Historia de Asturias'):
                           (event.target.textContent == temasConstitucion[11])? console.log('Tema: Geografia de Asturas'):null;
                        

               

                    //PENDIENTE DE TERMINAR         
            });

        //si hago clic fuera del boton me borra la lista
        //por ahora reiniciamos el inicio y randomiza las flags
        }//else{init();}//FIN del if
    });//FIN EVENTO del listado de bloques(PAGINA INICIAL)

    /**************************/ 
    /**************************/ 
    /**************************/ 
    /**************************/ 

    // selector flags
    flagListDOM=document.querySelectorAll('.flag');
    capturarEventFlags(flagListDOM);


    //EVENTO PARA ACCEDER A LOS TESTS
    btnTests.addEventListener('click', ()=>{
    console.log('Click en el boton hacer test');
    //pendiente implementar test y su funcionamiento
    });

}



const init = () =>{
    
    dibujarInicio();
    eventos();
    //console.log(respuestasArr);
}

export {
    init
}