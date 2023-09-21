<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bandejas
      
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos son un tipo de recipientes diseñados para mantener los huevos confinados en un espacio específico con el propósito de evitar que se muevan durante el transporte. Su estructura está diseñada para absorber cierta cantidad de energía en caso de un posible impacto, protegiendo así las cáscaras de los huevos. Estos recipientes pueden estar hechos de diversos materiales, como almohadillas de espuma de poliestireno o, en la mayoría de los casos, de celulosa moldeada. También pueden ser fabricados en plástico o PET (polietileno tereftalato), un tipo de plástico compuesto utilizados en envases y botellas. Estos contenedores suelen tener capacidad para seis, doce o treinta huevos, en su mayoría.

    p.mb-3(data-aos="fade-right") Los envases, empaques o recipientes para los huevos (bandejas), deberán ser nuevos, fabricados con materiales apropiados para entrar en contacto con el producto y cumplir con las reglamentaciones establecidas por la autoridad competente. Con el fin de no generar riesgo para la contaminación del producto, antes de usarlos, se deben revisar para confirmar que estén en buen estado y limpios.
    p.mb-5(data-aos="fade-right") En el mercado, se encuentran los siguientes tipos de bandejas.

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.texto-negro Bandeja desechable
            p Elaborada para usarse solo una vez en el empaque de huevos, con compartimentos interiores que facilitan la colocación de los huevos en forma vertical.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.texto-negro Bandeja plástica
            p Elaborada en material sintético, se utiliza para el empaque y transporte de los huevos al interior de la granja. Para su reutilización, se deberán realizar procesos de limpieza y desinfección y no deberán utilizarse para venta directa al público.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4.texto-negro Bandeja PEP
            p Está elaborada de material sintético, con compartimentos interiores que ayudan a estabilizar los huevos, es transparente e impermeable, el huevo está totalmente tapado. Su uso se ha popularizado últimamente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-4.png', alt='')


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Parámetros de calidad de bandejas para acomodación y apilado de huevos 

    p.mb-5(data-aos="fade-right") Identificando las necesidades estructurales de las bandejas, se debe aplicar la normatividad cualitativa que conlleva a garantizar al consumidor un producto de empacado de alta calidad como la normatividad técnica colombiana 1240 y la Resolución 3651 de 2014 del ICA que piden que las bandejas que tienen destino para almacenamiento, empaque y embalaje del huevo cumplan con:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/tema3-info.png', alt='')
      .tarjeta.color-primario.basico.p-3(x="16.5%" y="75%" numero="1")
        p Las bandejas deben ser nuevas, para no generar riesgo de contaminación del producto, deberán permanecer limpias, inspeccionarse antes del uso y que no hayan estado expuestos a contaminación por agentes infecciosos.
      .tarjeta.color-primario.basico.p-3(x="19%" y="19%" numero="2")
        p Los envases, empaques o recipientes para los huevos (bandejas), deberán estar fabricados con materiales apropiados para entrar en contacto con el huevo y cumplir con las reglamentaciones establecidas por la autoridad competente.
      .tarjeta.color-primario.basico.p-3(x="45.5%" y="21.3%" numero="3")
        p Deben ser inspeccionados antes del uso para asegurarse que estén en buen estado y limpios. Se deben mantener y almacenar en condiciones de higiene y limpieza cuando no estén siendo utilizados.
      .tarjeta.color-primario.basico.p-3(x="44%" y="46.3%" numero="4")
        p Los huevos deben empacarse y transportarse en bandejas de material desechable nuevo o en bandejas plásticas lavadas y desinfectadas. 
      .tarjeta.color-primario.basico.p-3(x="60.3%" y="51%" numero="5")
        p Los huevos limpios y seleccionados deben apilarse en torres de máximo cinco bandejas y distribuirse por la bodega de manera tal que facilite su traslado y el aprovechamiento de espacio.
      .tarjeta.color-primario.basico.p-3(x="58.7%" y="76%" numero="6")
        p Las bandejas deben almacenarse sobre estantes o estibas que estén en buenas condiciones de limpieza y separadas de las paredes y del piso.
      .tarjeta.color-primario.basico.p-3(x="84.8%" y="78.6%" numero="7")
        p Implementar procedimiento que permita la rotación del producto, garantizando el sistema Primeras Entradas, Primeras Salidas (PEPS) que consiste en ir sacando lo que primero va entrando a la bodega.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Disposición final de bandejas descartadas y/o usadas

    p.mb-5(data-aos="fade-right") De acuerdo con lo estipulado en la Resolución 1937 del 2013, emitida por el Instituto Colombiano Agropecuario - ICA, está totalmente prohibida la reutilización de bandejas o panales recolectores destinados al almacenamiento, comercialización o transporte de huevos y, además, ordena la adecuada destrucción y disposición final de las bandejas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema3/tema3-5.png' alt='')
      .col-md-8.col-12
        .cajon.color-acento-botones.p-4 
          p Estas medidas se toman debido a que la reutilización de los panales puede representar un gran riesgo en la bioseguridad de las granjas y también en la salud del consumidor final, ya que en las bandejas usadas, previamente pudieron existir huevos contaminados con bacterias como la #[em salmonella] y claramente serían un factor de transmisión de enfermedades. 

    p.mb-3(data-aos="fade-right") Teniendo en cuenta la importancia de esta medida, el incumplimiento de esta norma genera sanciones y multas previstas en la Ley 9 de 1979.
    p.mb-5(data-aos="fade-right") Partiendo de la información anterior, es importante realizar el correcto descarte y disposición final de las bandejas o panales recolectores siguiendo estas recomendaciones:     
 
    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down")
          ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/tema3-info2.svg', alt='')
            .tarjeta.color-primario.basico.p-3(x="30%" y="18%" numero="1")
              p Las bandejas de cartón deben estar fabricadas con material reciclable, presentar un color uniforme, sin manchas, sin humedades, no debe existir daño en los alvéolos y las pestañas deben ser uniformes y bien definidas.
            .tarjeta.color-primario.basico.p-3(x="24%" y="50%" numero="2")
              p Si hablamos de bandejas PET (polietileno tereftalato), estas deben ser elaboradas con plástico reciclado (R-PET), de color transparente, no deben tener perforaciones, cambios en el calibre, cambios de color o tamaños, las pestañas de cierre deben ser muy bien definidas y uniformes.
            .tarjeta.color-primario.basico.p-3(x="30%" y="77%" numero="3")
              p Es importante prohibir en la empresa la compra de bandejas usadas.
            .tarjeta.color-primario.basico.p-3(x="72%" y="19%" numero="4")
              p Se debe verificar que las bandejas sean de primer uso y si se tiene sospecha o se han utilizado, se deberán romper las bandejas usadas para evitar que sean reutilizadas.
            .tarjeta.color-primario.basico.p-3(x="80%" y="50%" numero="5")
              p Las bandejas de cartón se consideran material reciclable no peligroso (similares a residuos domésticos, que no requieren de ningún tratamiento adicional). Para facilitar su reciclaje, deberán mantenerse limpios y secos, sin que se contamine el material con otros productos o líquidos como el agua o el aceite.
            .tarjeta.color-primario.basico.p-3(x="74%" y="77%" numero="6")
              p Las bandejas PET (polietileno tereftalato), a diferencia de las bandejas de cartón, son elaboradas de un material que no se descomponen fácilmente y que, por lo tanto, tienen que ser transformados para ser incluidos en procesos productivos como materia prima o ser reutilizados para diferentes actividades.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
