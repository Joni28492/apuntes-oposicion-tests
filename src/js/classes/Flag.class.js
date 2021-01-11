
export class FlagInput{


    //comprobar que no se repitan los Id

    constructor(id, pregunta, respuesta, placeHolderFormat) {

        this.id                = id;
        this.pregunta          = pregunta;
        this.respuesta         = respuesta;
        this.placeHolderFormat = placeHolderFormat;
    }


    crearInputFlag(){

        const html=`
            <div class="flag">
            
            <label class="text-white p-3">${this.id}. ${this.pregunta}</label>
            <input type="text" placeholder="${this.placeHolderFormat}">
            <button id="btn-${this.id}" class=" btn btn-info">Resolver</button>
            </div>
        `;

        return html;
    }
    submitFlag(){}
    comprobarFlag(input){

        if (input === this.respuesta) {
            return true;
        } else {
            return false;
        }

    }
    dibujarResultado(input){
        const btn =document.querySelector(`#${this.id}`);
        
        if (comprobarFlag(input)) {
            
            btn.classList="btn btn-success";
            btn.innerText = 'Correcto';
        } else {
            btn.classList="btn btn-danger";
            btn.innerText = 'Fallaste';
        }
    }


}