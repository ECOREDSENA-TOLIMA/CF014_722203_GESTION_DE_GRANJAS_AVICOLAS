<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presupuesto

    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 En el área de clasificación de las granjas avícolas, diariamente se tienen establecidas y programadas una serie de actividades para cumplir los criterios de selección del huevo, previo al inicio, durante y después del proceso, ya que con esto se asegura la inocuidad del producto. Por lo cual, el desarrollo de estas actividades, está manifiestas en:

    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.p-3(style="width:100%")
          .row.justify-content-center.mb-3
            .col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/tema1-1.svg', alt='')
          p.text-center #[b Alistamiento, limpieza y desinfección de áreas.]
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.p-3(style="width:100%")
          .row.justify-content-center.mb-3
            .col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='')
          p.text-center #[b Limpieza y desinfección de equipos] (transportadores, ovoscopio, bandas, cucharas de selección).
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.p-3(style="width:100%")
          .row.justify-content-center.mb-3
            .col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/tema1-3.svg', alt='')
          p.text-center #[b Destino de residuos.]
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.p-3(style="width:100%")
          .row.justify-content-center.mb-3
            .col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/tema1-4.svg', alt='')
          p.text-center #[b Insumos de almacenamiento.]
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.py-4(style="width:100%")
          .row.justify-content-center.mb-3
            .col-11.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-5.svg', alt='')
          p.text-center.p-2 #[b Conservación del producto.]
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.p-3(style="width:100%")
          .row.justify-content-center.mb-3
            .col-10.col-md-8
              figure
                img(src='@/assets/curso/temas/tema1/tema1-6.svg', alt='')
          p.text-center #[b Capacitación del talento humano.]
      .col-sm-6.col-lg-3.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-acento-botones--borde.py-4(style="width:100%")
          .row.justify-content-center.mb-3
            .col-11.col-md-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-7.svg', alt='')
          p.text-center.p-2 #[b Empaques, embalajes, rotulado.]

    p.mb-5(data-aos="flip-down") Una vez es realizada la revisión de las actividades se deja registro para llevar un mejor control, en la siguiente tabla se presenta un ejemplo, que puede ser ajustado acorde al contexto de la granja.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo de registro de revisión de actividades] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Actividades 
                th 
                  .mb-0 #[b 1] 
                  .mb-0 #[b Lunes] 
                th 
                  .mb-0 #[b 2] 
                  .mb-0 #[b Martes]  
                th 
                  .mb-0 #[b 3] 
                  .mb-0 #[b Miercoles]  
                th 
                  .mb-0 #[b 4] 
                  .mb-0 #[b Jueves]  
                th 
                  .mb-0 #[b 5] 
                  .mb-0 #[b Viernes]  
                th 
                  .mb-0 #[b 6] 
                  .mb-0 #[b Sabado]  
                th 
                  .mb-0 #[b 7] 
                  .mb-0 #[b Domingo]  
                th Observaciones 
            tbody
              tr.text-center
                th Limpieza
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr.text-center
                th Equipos
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr.text-center
                th Residuos
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr.text-center
                th Insumos
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td
              tr.text-center
                th Producto
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td
              tr.text-center
                th Capacitación
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td
              tr.text-center
                th Empaques
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td

    p.mb-5(data-aos="fade-right") Las tablas de registro y cronogramas pueden variar según la necesidad de la clasificadora, sin embargo, para la realización de las todas estas actividades operacionales y manejo de los equipos, se debe realizar un presupuesto económico rentable, donde se muestre la eficiencia que busca la granja en el proceso de selección de huevo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-4.col-lg-5.col-12
        img(src='@/assets/curso/temas/tema1/tema1-8.png' alt='')
      .col-md-8.col-lg-7.col-12
        .cajon.color-primario.p-3 
          p.mb-0 El presupuesto depende también de las actividades diarias para sacar los costos mensuales y proyecciones en el cumplimiento de metas del área de selección de huevo para su comercialización, donde se planifica desde los equipos, el recurso humano y los insumos operativos que llevan a la planificación de la inversión diaria o mensual de la unidad productiva, en la siguiente figura se relacionan las áreas, factores y costos que pueden considerarse al momento de realizar el presupuesto.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Factores para presupuesto en el área de clasificación] 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-9.svg', alt='En la figura 1 se muestra la distribución del agua en el planeta tierra.')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-8.col-lg-7.col-12
        .cajon.color-secundario.p-4 
          p.mb-0 El presupuesto económico a manejar en el área de clasificación o selección de huevo está enfocado en la operación, lo que permite al productor planificar su inversión acorde a los objetivos que se tiene para cumplir las metas de calidad y comercial del producto. 
      .col-md-4.col-lg-5.col-12
        img(src='@/assets/curso/temas/tema1/tema1-10.png' alt='')

    p.mb-3(data-aos="fade-right") Toda esta planificación inicia desde la compra de los equipos requeridos para realizar las actividades clave en la clasificación de los huevos, las cuales puedes sen automáticas industriales o manuales, siempre garantizando la seguridad en el manejo del huevo, por lo que se debe verificar el cumplimiento de labor por hora y desgaste de la máquina utilizadas, la adecuación de las áreas para su manejo respectivo y con buenas condiciones de Iluminación y ventilación.
    p.mb-5(data-aos="fade-right") El recurso humano es clave en cada uno de los procesos, especialmente en el cumplimiento de las labores, la limpieza y desinfección, evaluando los productos a utilizar y eficacia de acción en el proceso. Por tal razón, se debe ser minucioso con los objetivos y metas que se traza el productor para generar un presupuesto con respuesta positiva a la eficiencia de que se realiza a diario y no generar incrementos inoficiosos que se conviertan en gastos por falta de planeación.




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
