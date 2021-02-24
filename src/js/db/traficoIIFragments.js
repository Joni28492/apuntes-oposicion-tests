const intro = `  <div class="conatiner bg-secondary p-4 text-center text-light mr-2 ml-2 rounded">
<h5>Introducción</h5>
<p>Título II, capítulo I, normas generales en los articulos del 10 al 14 del R.D. Legislativo 6/2015, del 30 de octubre por el que se aprueba el texto refundido de la <strong>Ley sobre tráfico circulación de vehículos a motor y seguridad vial</strong> </p>
</div>`;
const art10 = `
<div class="container mt-2 alert alert-success">
    <h5> <strong>Usuarios, Conductores y titulares de los vehículos</strong> </h5> <hr> <small>Art.10</small>
    <ul class="list-group">
      <li class="list-group-item list-group-item-success">
        <p><strong>El Usuario</strong> de la vía esta obligado a comportarse  de forma que no entorpezca indebidamente la circulación y no cause ningun peligro, prejuicios o molestias innecesarias a las personas o daños a los bienes</p>
      </li>
      <li class="list-group-item list-group-item-success">
        <p><strong>El conductor</strong> debe utilizar el vehículo con la diligencia, precaución y atención necesarias para evitar todo daño, propio o ajeno
        </p>
        <p class="border border-danger rounded p-2">
          El conductor debe verificar que las placas de la matrícula del vehículo no presenta obstáculos que impidan o dificulten su lectura o identificacion
        </p>
      </li>
      <li class="list-group-item list-group-item-success">
        <p><strong>El titular</strong> de un vehículo, tiene que actuar con la máxima diligencia para evitar los riesgos que conlleva su utilización, someterlo a reconocimientso e inspecciones que correspondan eimpedir que sea conducido por quien nunca haya obtenido permiso o la  licencia de conducción correspondiente</p>
      </li>
    
    </ul>
    
  </div>`;

  const art11 =`<div class="container mt-2 alert bg-info text-light shadow">
  <h5>Obligaciones del titular del vehículo y del conductor habitual</h5> <hr> <small>Art.11</small>
  <ul class="list-group">
    <li class="list-group-item list-group-item-info rounded">
      <strong>El titular del vehículo tiene las siguientes obligaciones</strong>
      <p>Facilitar a la administración la identificación del conductor del vehículo en el momento de cometerse una infracción, los datos facilitados deben incluir el número del permiso o licencia de conducción que permita la identificación en el registro de conductores e infractores</p>
      <p>si el conductor no figura en el debido registro como podría ser el caso de un extranjero, el titular deberá disponer de copia de la autorización administrativa</p>
      <p>si el titular fuese una empresa (sin conductor) de alquiler de vehículos la autorización administrativa se podra sustituir por el contrato de arrendamiento</p>
      <p>impedir que el vehículo sea conducido por quien nunca haya obtenido el permiso o la licencia de conducción correspondiente</p>
    </li>
     <li class="list-group-item list-group-item-info mt-2 rounded"> 
      <strong>El titular</strong>
       <p>puede comunicar al Registro de Vehículos del organismo autónomo Jefatura Central de Tráfico la identidad del conductor habitual del mismo(solo 1), en este supuesto el titular queda exonerado de las obligaciones anteriores</p>
       <p>las obligaciones establecidas en el apartado I y la comunicación descrita en el apartado II corresponden al arrendatario a largo plazo</p>

    <p>El titular del vehículo en regimen de arrendamiento a largo plazo DEBE comunicar al registro de vehículos del organismo autónomo de la jefatura Central de Tráfico la identidad del arrendatario</p>
    </li>
  </ul>
</div>`;

const art12=`<div class="container alert bg-danger text-light">
<h5 class="text-center ">Obras y actividades prohíbidas</h5> <hr> <small>Art. 12</small>

<ul class="list-group">
  
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong>La realización de obras, instalaciones, colocación de contenedores, mobiliario urbano o cualquier otro elemento u objeto de forma permanente o provisional en las vias</strong>
    <p>necesita autorización previa</p>
    <strong>La realización de obras en las mismas debe ser comunicada con anterioridad a su inicio</strong>
    <p>al orgánismo autónomo Jefatura Central Tráfico o en su caso, a la autoridad autonómica o local responsable</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong>Se prohíbe arrojar, depositar o abandonar objetos sobre la vía </strong>
    <p>o materias que puedan entorpecer la libre circulación, parada o estacionamiento o hacerlos peligrosos</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong>Quien haya creado algún obstaculo o peligro sobre la vía, debe hacerlo desaparecer lo antes posible </strong>
    <p>adoptando las medidas necesarias para que pueda ser advertido por los demás usuarios de la via y no se dificulte la circulación</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong> se prohíbe arrojar a la vía cualquier objeto que pueda dar lugar a la producción de incendios</strong>
    <p>o poner en peligro la seguridad víal</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong>Se prohíbe la emisión de perturbaciones eléctromagneticas, ruidos, gases u otros contaminantes</strong>
    <p>en las vías objeto de esta ley, en los terminos que reglamentariamente se determine</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
    <strong>Se prohíbe cargar vehículos de forma distinta</strong>
    <p> a lo que reglamentariamente se determine</p>
  </li>
  <li class="list-group-item list-group-item-danger mt-1 rounded">
   <p> <strong>Los niveles de emisión de ruido</strong> superiores a los que reglamentariamente se determine</p>
    <p> <strong>Los niveles de emisión de ruido</strong> superiores a los limites establecidos, o cuando hayan sido objeto de una reforma de importancia no autorizada</p>
    <p>Todos los conductores de los vehículos quedan obligados a colaborar en las pruebas que reglamentarias de detención que permitan comprobar las posibles deficiencias indicadas</p>
  </li>
 
</ul>

</div>
`;

const traficoTemaII =`
<hr>
${intro}
${art10}
${art11}
${art12}
`;

export {
    traficoTemaII
}