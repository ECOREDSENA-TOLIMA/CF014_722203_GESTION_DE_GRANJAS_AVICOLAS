<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En el ámbito de la producción y manejo de huevos de gallina, la inspección, selección, inventarios y almacenamiento, son procesos críticos para garantizar la calidad y seguridad del producto final. Estos subtemas abordan aspectos fundamentales que van desde la gestión financiera hasta la conservación de la frescura y la prevención de contaminación. A través de este mapa conceptual, se explorarán temas que van desde la planificación presupuestaria, pasando por la limpieza y desinfección, hasta los protocolos de inspección y calidad tanto en el proceso de embalaje como en el almacenamiento de los huevos. Cada subtema juega un papel crucial en la producción eficiente y en la entrega de huevos frescos y seguros al consumidor.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis: Inspección, proceso de selección, inventarios y almacenamiento del huevo de gallina. Comprende  Temas como: presupuesto, limpieza y desinfección, bandejas, empaques y embalaje, protocolos de inspección y almacenamiento.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
