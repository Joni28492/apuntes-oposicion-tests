
export let respuestasArr=[];

export class FlagInput{


    

    constructor(id, pregunta, respuesta, placeHolderFormat) {

        this.id                = id;
        this.pregunta          = pregunta;
        this.respuesta         = respuesta;
        this.placeHolderFormat = placeHolderFormat;
        
    }


    crearInputFlag(){

        const html=`
            <div class="flag">
            
            <label class="text-white p-3"> ${this.pregunta}</label>
            <input class="form-control-plaintext text-center text-white" type="text" placeholder="${this.placeHolderFormat}">
            <button type="submit" id="btn-${this.id}" class="m-2 btn btn-info">Comprobar</button>
            <button type="submit" id="btn-${this.id}-sol" class="m-2 btn btn-success">Solución</button>
            </div>
        `;

        return html;
    }
   
    
    //devuelve true o false en funcion de la respuesta del usuario
    //que es el input.value, expresion ternaria
    comprobarFlag(respuestaUsuario){ return respuestaUsuario == this.respuesta && true ; }

}