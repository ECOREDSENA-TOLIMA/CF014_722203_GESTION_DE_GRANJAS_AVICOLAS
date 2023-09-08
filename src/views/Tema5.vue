<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Protocolos de inspección del proceso de empaque y embalaje
    
    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-down")
      p Estos están encaminados a preservar la sanidad e inocuidad del huevo, por lo que en la etapa de producción se busca enviar y reducir cualquier tipo de riesgo biológico, físico, químico o de manipulación, de esta manera la inspección se realiza teniendo en cuenta los puntos críticos que pueden presentarse en este procedimiento, por lo que en general los aspectos relevantes son:

      
    .row.justify-content-center.align-items-center
      .col-md-4.col-10(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/tema5-1.svg')
      .col-md-8.col-12
        .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down")
          ul.lista-ol.lista-ol--separador.mb-0
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Material apropiado del empaque / embalaje.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Desinfección del empaque / embalaje.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Buena manipulación del huevo.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Personal capacitado en manipulación del producto.
            li.lista-custom
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span Retiro de material en riesgo de contaminación.
            li.lista-custom.mb-0
              i.pe-2
                img(src='@/assets/curso/temas/ico-huevo.svg')
              span.mb-0 Cumplimiento de protocolo.

    p.mb-3(data-aos="fade-right") La inspección de los protocolos debe ser continua y programada para garantizar que los procesos se están llevando de manera adecuada y que, por ende, el producto final, en este caso el huevo, cumple con todos los criterios normativos sanitarios de calidad e inocuidad y que es apto para el consumo humano.
    p.mb-5(data-aos="fade-right") En ese aspecto se puede revisar la siguiente tabla que describe los riesgos que se pueden presentar en el proceso y como se pueden prevenir o tratar, siendo una descripción del proceso de inspección en el empaque y embalaje de huevos.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Descripción de riesgos en el proceso de almacenamiento] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Tomada de Inprovo (2016).
            thead.text-small
              tr.cabecera-a.text-center
                th Peligro 
                th Causa
                th Medidas preventivas
                th Probabilidad  
                th Gravedad  
                th Evaluación del riesgo  
            tbody.text-small
              tr.color-tr-a
                td.text-center.p-2
                  p #[b Microbiológico:] presencia de #[em Salmonella zoonósica.]
                td.p-2 Incorrecta identificación de huevos de categoría B.
                td.p-2 
                  p Plan de formación.
                  hr
                  p Buenas prácticas de higiene.
                td.p-2 Baja
                td.p-2 Moderada
                td.p-2 Menor
              tr.color-tr-b
                td.text-center.p-2(rowspan="2") 
                  p #[b Físico:] presencia de cuerpos extraños.
                td.p-2 Personal manipulador.
                td.p-2 Buenas prácticas de higiene.
                td.p-2 Muy baja
                td.p-2 Alta
                td.p-2 Insignificante
              tr.color-tr-b
                td.p-2 Inadecuado mantenimiento de equipos e instalaciones.
                td.p-2 Plan de mantenimiento de infraestructuras y equipos.
                td.p-2 Muy baja
                td.p-2 Alta
                td.p-2 Insignificante
              tr.color-tr-a
                td.text-center.p-2(rowspan="2") 
                  p #[b Químico:] presencia de sustancias tóxicas.
                td.p-2 Inadecuada limpieza y desinfección.
                td.p-2 Plan de limpieza y desinfección. 
                td.p-2 Muy baja
                td.p-2 Baja
                td.p-2 Insignificante
              tr.color-tr-a
                td.p-2 Inadecuado mantenimiento de equipos e instalaciones.
                td.p-2 Plan de mantenimiento de infraestructuras y equipos.
                td.p-2 Muy baja
                td.p-2 Baja
                td.p-2 Insignificante



</template>

<script>
export default {
  name: 'Tema5',
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
