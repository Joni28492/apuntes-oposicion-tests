
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
            
            <p class="text-white">${this.id}. ${this.pregunta}</p>
            <input type="text" placeholder="${this.placeHolderFormat}">
            <button id="btn-${this.id}" class="btn btn-info">Resolver</button>
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