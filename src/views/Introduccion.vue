<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

      
    .row.mb-4(data-aos="fade-down")
      .col-12
        .cajon.color-acento-botones.p-4
          p.mb-0 En este componente se abordarán los conceptos para realizar los protocolos de inspección de procesos relacionados con la producción de huevos, con el fin de aplicar las buenas prácticas de la industria de productos avícolas. Como punto de partida, se invita a ver el siguiente video introductorio.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Inspección, selección, inventarios y almacenamiento de huevo de gallina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Inspección, selección, inventarios y almacenamiento de huevo de gallina
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
