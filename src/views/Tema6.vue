<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Protocolos de inspección del almacenamiento de huevo de gallina

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inspección de almacenamiento de huevos cumple con la función de vigilar las condiciones de calidad, sanidad, integridad e inocuidad de producto final, validando que se preserven durante el proceso de acopio y almacenamiento, hasta el traslado, por lo que deben tenerse en cuenta las condiciones de la infraestructura, la temperatura, la humedad, los elementos de embalaje entre otras cosas, de acuerdo con la etapa del proceso como se describe a continuación.
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema6/tema6-2.png' alt='')
      .col-md-8.col-12
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Recepción y almacenamiento") Es importante no dejar el producto directamente sobre el piso, usar estibas plásticas y asegurarse de que estén retiradas de la pared.
          
          p.text-small(numero="2" titulo="Almacenamiento") Validar que el producto esté lejos de sustancias y/o alimentos que generen olores fuertes (detergentes, ambientadores, ajo, cebolla, cítricos, entre otros), puesto que a través de su cáscara porosa pueden penetrar dichos olores y generar afectación en el normal olor y sabor del producto.
          
          p.text-small(numero="3" titulo="Fauna nociva") Corresponde a cucarachas, ratones, pulgas, larvas, arañas, entre otros, que pueden generar condiciones de deterioro del producto, en un tiempo inferior a su declaración de vida útil. Por tanto, si el producto ha sido contaminado (por citar un ejemplo) con larvas de mosca, se puede presentar crecimiento de gusanos.
          
          p.text-small(numero="4" titulo="Daños") Si se presentan daños de alguna unidad de producto durante la manipulación, este debe ser retirado, ya que su exposición al medio ambiente lo hace propenso a contaminación interna y, por consecuencia, a deterioro y generación de malos olores que han de contaminar el producto que se encuentre cerca.
          
          p.text-small(numero="5" titulo="En bodega") Se debe almacenar el producto en condiciones de temperatura ambiente.

    p.mb-5(data-aos="fade-right") La inspección tiene como objetivo reducir cualquier tipo de riesgo que pueda presentarse durante el proceso de almacenamiento, por lo cual deben identificarse los puntos críticos y formularse las medidas preventivas tal y como se muestra en el siguiente cuadro ilustrativo del proceso de inspección en esta etapa de producción de huevos de gallina.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Descripción de peligros, medidas y riesgos en el proceso de almacenamiento] 
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
                td.text-center.p-2(rowspan="2") 
                  p #[b Microbiológico:] presencia de #[em Salmonella zoonósica.]
                td.p-2 Inadecuadas condiciones de almacenamiento.
                td.p-2 Buenas prácticas de higiene y almacenamiento.
                td.p-2 Baja
                td.p-2 Moderada
                td.p-2 Menor
              tr.color-tr-a
                td.p-2 Contaminación cruzada por almacenamiento incorrecto de huevos categoría A y B.
                td.p-2 Plan de formación.
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
                td.text-center.p-2
                  p #[b Químico:] presencia de sustancias tóxicas.
                td.p-2 Inadecuadas condiciones de almacenamiento.
                td.p-2 
                  p Plan de limpieza y desinfección. 
                  p Plan de control de plagas.
                td.p-2 Muy baja
                td.p-2 Baja
                td.p-2 Insignificante




</template>

<script>
export default {
  name: 'Tema6',
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
