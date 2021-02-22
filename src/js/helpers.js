import { flagsBloqueConstitucion } from "./db/flags.db";
import { temaConstitucionI, temaCuerposyfuerzasI, temaTraficoI, temaPenalI } from "./db/htmlteoria.db";
import { policiaMedioambiental } from "./db/medioAmbienteFragments";
import { traficoTemaI } from "./db/traficoIFragments";
import { dibujarTemas, dibujarTeoria, init, volverTemasStatus} from "./dibujar-bloques";
import { bloques, temasConstitucion, temasCuerposYFuerzasSeguridad, temasTrafico, temasCodigoPenal } from "./temas-list";



const capturarBtnHome = (btnHome)=>{
    //capturamos el btn Home para volver al inicio
    btnHome=document.querySelector('#btn-home');
    btnHome.addEventListener('click', init);
}

const capturarBtnHomeTema = (homeTema)=>{
    homeTema=document.querySelector('#Home-Tema');
    homeTema.addEventListener('click', ()=>{

        const retorno = (volverTemasStatus === 'La Constitución Española')?
                        dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion):
                        (volverTemasStatus === 'Cuerpos y Fuerzas de seguridad')?
                        dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
                        (volverTemasStatus === 'Tráfico')?
                        dibujarTemas(temasTrafico, 'Tráfico', 'Trafico seguridad vial'):
                        (volverTemasStatus === 'Código Penal')?
                        dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'): null;
        //dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion);
    });
}



const ternarioBloquesFunction = (event, ul) =>{

    const bloque=
    (event.target.textContent == bloques[0]) 
    ? dibujarTemas(temasConstitucion, 'La Constitución Española', 'de 1978', flagsBloqueConstitucion):
    (event.target.textContent == bloques[1]) 
    ? dibujarTemas(temasCuerposYFuerzasSeguridad, 'Cuerpos y Fuerzas de seguridad', 'Ley Organica 2/86 13 Marzo'):
    (event.target.textContent == bloques[2]) 
    ? dibujarTemas(temasTrafico, 'Tráfico', 'Trafico seguridad vial'):
    (event.target.textContent == bloques[3]) 
    ? dibujarTemas(temasCodigoPenal, 'Código Penal', 'CP'): null;

    capturaUlTemas(ul);

    return bloque;

}


const ternarioTemaConstitucionFunction = (event,ul ) =>{
    
    
    

   const tema=  (event.target.textContent == temasConstitucion[0])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte I'):
                (event.target.textContent == temasConstitucion[1])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte II'):
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

    capturaUlTemas(ul);

    return tema;
                        
}


const ternarioTemaFuerzasYCuerposDeSeguridad = (event,ul ) =>{
    
    
    
                //pendiente cambiar los clg
   const tema=  (event.target.textContent == temasCuerposYFuerzasSeguridad[0])? dibujarTeoria(temaCuerposyfuerzasI, 'Cuerpos y fuerzas', 'Parte I'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[1])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte II'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[2])? console.log('Constitucion III'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[3])? console.log('Tema: Estatuto Autonomia Principado de Asturias'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[4])? console.log('Tema: Administracion Local'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[5])? console.log('Tema: Derecho Administrativo'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[6])? console.log('Tema: Acto administrativo'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[7])? console.log('Tema: Procedimiento Administrativo'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[8])? console.log('Tema: Personal al servicio de las corporaciones locales'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[9])? console.log('Tema: Haciendas Locales'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[10])? console.log('Tema: Historia de Asturias'):
                (event.target.textContent == temasCuerposYFuerzasSeguridad[11])? dibujarTeoria(policiaMedioambiental, 'Policía Medioambiental', 'Competencias, servicio y gestión'):null;

    capturaUlTemas(ul);

    return tema;
                        
}

const ternarioTemaTrafico = (event,ul ) =>{
    
    
    
        //pendiente cambiar los clg
    const tema= (event.target.textContent == temasTrafico[0])? dibujarTeoria(traficoTemaI, 'La Ley sobre tráfico', 'circulación de vehículos a motor y seguridad vial'):
                (event.target.textContent == temasTrafico[1])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte II'):
                (event.target.textContent == temasTrafico[2])? console.log('Constitucion III'):
                (event.target.textContent == temasTrafico[3])? console.log('Tema: Estatuto Autonomia Principado de Asturias'):
                (event.target.textContent == temasTrafico[4])? console.log('Tema: Administracion Local'):
                (event.target.textContent == temasTrafico[5])? console.log('Tema: Derecho Administrativo'):
                (event.target.textContent == temasTrafico[6])? console.log('Tema: Acto administrativo'):
                (event.target.textContent == temasTrafico[7])? console.log('Tema: Procedimiento Administrativo'):
                (event.target.textContent == temasTrafico[8])? console.log('Tema: Personal al servicio de las corporaciones locales'):
                (event.target.textContent == temasTrafico[9])? console.log('Tema: Haciendas Locales'):
                (event.target.textContent == temasTrafico[10])? console.log('Tema: Historia de Asturias'):
                (event.target.textContent == temasTrafico[11])? console.log('Tema: Geografia de Asturas'):null;

    capturaUlTemas(ul);

    return tema;
                
}


const ternarioCodigoPenal = (event,ul ) =>{
    
    
    
        //pendiente cambiar los clg
    const tema= (event.target.textContent == temasCodigoPenal[0])? dibujarTeoria(temaPenalI, 'Código Penal', 'Parte I'):
                (event.target.textContent == temasCodigoPenal[1])? dibujarTeoria(temaConstitucionI, 'Constitución', 'Parte II'):
                (event.target.textContent == temasCodigoPenal[2])? console.log('Constitucion III'):
                (event.target.textContent == temasCodigoPenal[3])? console.log('Tema: Estatuto Autonomia Principado de Asturias'):
                (event.target.textContent == temasCodigoPenal[4])? console.log('Tema: Administracion Local'):
                (event.target.textContent == temasCodigoPenal[5])? console.log('Tema: Derecho Administrativo'):
                (event.target.textContent == temasCodigoPenal[6])? console.log('Tema: Acto administrativo'):
                (event.target.textContent == temasCodigoPenal[7])? console.log('Tema: Procedimiento Administrativo'):
                (event.target.textContent == temasCodigoPenal[8])? console.log('Tema: Personal al servicio de las corporaciones locales'):
                (event.target.textContent == temasCodigoPenal[9])? console.log('Tema: Haciendas Locales'):
                (event.target.textContent == temasCodigoPenal[10])? console.log('Tema: Historia de Asturias'):
                (event.target.textContent == temasCodigoPenal[11])? console.log('Tema: Geografia de Asturas'):null;

    capturaUlTemas(ul);

    return tema;
                
}


const capturaUlTemas = (ul) =>{
        ul =document.querySelector('ul');

        ul.addEventListener('click', (event)=>{
            //hay una duplicidad pero solo si es null
            //const tema=ternarioTemaConstitucionFunction(event, ul);
            //console.log( 'Boton funciona con dupliciadad');
            const titulo=document.querySelector('h1');

            //ternario de funciones ternarias
            const tema = (titulo.textContent === 'La Constitución Española')? ternarioTemaConstitucionFunction(event, ul):
            (titulo.textContent === 'Cuerpos y Fuerzas de seguridad')?ternarioTemaFuerzasYCuerposDeSeguridad(event, ul): 
            (titulo.textContent === 'Tráfico')?ternarioTemaTrafico(event, ul):
            (titulo.textContent === 'Código Penal')?ternarioCodigoPenal(event, ul): null;
            //controlar que devuelva a su tema correscpondiente 
        });
}



/*//ida de olla para no escribir tanto ternario pero puede funcionar
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
    capturaUlTemas,
    

}