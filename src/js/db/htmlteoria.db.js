import { art139Ref, art14ref, caracteristicasGeneralesConstitucion, disposicionesConstitucion, estadoAutonomias, estructuraYContenidoConstitucion, fechasConstitucion, introDerechosFundamentales, principiosGeneralesConstitucionales, SeccionPrimera15_29, tresGrandesPoderes, valoresSuperioresConstitucion } from "./constitucionFragments";

const temaConstitucionI= `
<div class="alert alert-info">
 <h1>Cosntitución I</h1>
 
   ${tresGrandesPoderes}
   ${fechasConstitucion}
   ${disposicionesConstitucion}
   ${caracteristicasGeneralesConstitucion}
   ${principiosGeneralesConstitucionales}
   ${estructuraYContenidoConstitucion}
   ${valoresSuperioresConstitucion}
   ${art139Ref}
   ${estadoAutonomias}
   ${introDerechosFundamentales}
   ${art14ref}
   ${SeccionPrimera15_29}

   <ul class="alert-success">

        <hr>
        <h4>Garantias (Art- 14-38)- vinculan a todos los poderes públicos</h4>
        <li class="col-md-3 btn alert-info">Normativas de reserva de ley</li>
        <li class="col-md-3 btn alert-info">Institucionales</li>
        <li class="col-md-3 btn alert-info">Jurisdiccionales</li>
        <hr>
        regulación Art. 161.1
    </ul>



</div>
`;


const temaCuerposyfuerzasI= `
<div class="alert alert-info">
 <h1>Cuerpos y fuerzas de seguridad </h1>
    <ul>

        <hr>
        <h4>2/86 13 marzo</h4>
       
        <hr>
       
    </ul>
</div>`;



const temaTraficoI= `
<div class="alert alert-info">
 <h1>Trafico </h1>
    <ul>

        <hr>
        <h4>ley de trafico</h4>
        
        <hr>
       
    </ul>
</div>`;


const temaPenalI= `
<div class="alert alert-info">
 <h1>Codigo Penal </h1>
    <ul>

        <hr>
        <h4>a la carcel</h4>
        
        <hr>
       
    </ul>
</div>`;




export {
    temaConstitucionI,
    temaCuerposyfuerzasI,
    temaTraficoI,
    temaPenalI
}