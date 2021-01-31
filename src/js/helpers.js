import { flagsBloqueConstitucion } from "./db/flags.db";
import { temaConstitucionI } from "./db/htmlteoria.db";
import { dibujarTemas, dibujarTeoria, init} from "./dibujar-bloques";
import {bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from "./temas-list";



//const ternarioBloques = ['Primer Bloque','segundo Bloque','TercerBloque', 'cuarto Bloque'];



const capturarBtnHome = (btnHome)=>{
    //capturamos el btn Home para volver al inicio
    btnHome=document.querySelector('#btn-home');
    btnHome.addEventListener('click', init);
}

const capturarBtnHomeTema = (homeTema)=>{
    homeTema=document.querySelector('#Home-Tema');
    homeTema.addEventListener('click', ()=>{
        dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion);
    });
}



const ternarioBloquesFunction = (event, ul) =>{

    const bloque=
    (event.target.textContent == bloques[0]) 
    ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion):
    (event.target.textContent == bloques[1]) 
    ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
    (event.target.textContent == bloques[2]) 
    ? dibujarTemas(temasTrafico, 'Trafico', 'Trafico seguridad vial'):
    (event.target.textContent == bloques[3]) 
    ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'): null;

    capturaUlTemas(ul);

    return bloque;

}


const ternarioTemaConstitucionFunction = (event) =>{
   const tema=  (event.target.textContent == temasConstitucion[0])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte I'):
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

    return tema;
                        
}

/*

    ul=document.querySelector('ul');
    //este evento es para los temas
    ul.addEventListener('click', (event)=>{
        
        //capturamos el titulo para saber en que bloque estamos 
        //const tituloBloque=ul.parentNode.parentNode.parentNode.children[1].children[0].children[0].textContent
        //console.log(tituloBloque);
        //funcion ternaria para elegir tema  de Cosntitucion
        const tema=ternarioTemaConstitucionFunction(event);
        console.log(tema);//undefined
        //PENDIENTE DE TERMINAR         
    }); */
const capturaUlTemas = (ul) =>{
        ul =document.querySelector('ul');

        ul.addEventListener('click', (event)=>{

            const tema=ternarioTemaConstitucionFunction(event);
            console.log(tema, 'Boton funciona');
        });
}


//despues iria if(bloque!==null)
/*
//posibilidad de trabajar con el metodo filter y el index of
const helperTernarios = (event, arr,temas ,callback) =>{

   const filtrado = arr.filter( element => event.target.textContent == arr[element] );
    
   //hace referencia a dibujar temas
   callback();
  
}


*/
export {
    ternarioBloquesFunction,
    ternarioTemaConstitucionFunction,
    capturarBtnHome,
    capturarBtnHomeTema,
    capturaUlTemas

}