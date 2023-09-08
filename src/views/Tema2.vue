<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Limpieza y desinfección

    p.mb-5(data-aos="fade-right") Forman parte integral del programa de bioseguridad implementado en las instalaciones, elementos y personal de las diferentes producciones, para impedir la entrada y propagación de agentes patógenos que puedan poner en riesgo el proceso productivo, a los animales y a los trabajadores de las unidades productivas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-8.col-12
        .cajon.color-secundario.p-4 
          p.mb-0 Las ventajas de llevar a cabo una limpieza, higiene y desinfección adecuadas suelen tener un efecto duradero de aproximadamente un año. Sin embargo, en el caso de que surja una enfermedad infecciosa o parasitaria, es posible que sea necesario aumentar la frecuencia de las actividades de higiene y desinfección para controlar los problemas sanitarios.
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-1.png' alt='')

    p.mb-3(data-aos="fade-right") Un buen programa de limpieza desinfección y desinsectación al igual que las medidas de bioseguridad son muy necesarias en la producción y se pagan por sí solos.
    p.mb-5(data-aos="fade-right") Es así como en las áreas de la clasificación del huevo comercial es esencial la limpieza y desinfección dentro del sistema productivo de una empresa avícola, ya que permanentemente se enfrentan a múltiples peligros que pueden afectar la salud del consumidor. Los peligros que se enfrentan a diario las áreas de clasificación son:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-5.mb-5.mb-lg-0.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-2.svg' alt='')
          .tarjeta.color-acento-botones
            .p-4.pt-5
              h4.text-center Biológicos
              p Los huevos pueden contaminarse cuando contactan con superficies, equipos y utensilios sucios, o que no se hayan desinfectado adecuadamente.

      .col-md-6.col-lg-5.mb-5.mb-lg-0.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-3.svg' alt='')
          .tarjeta.color-acento-botones
            .p-4.pt-5
              h4.text-center Químicos
              p puede darse una contaminación de tipo químico en los alimentos, procedente de los residuos de productos de limpieza y desinfección, por un uso inadecuado de los mismos o por una deficiente dilución.
    
    p.mb-3(data-aos="fade-right") Las personas que trabajan en la manipulación de alimentos son consideradas como una de las principales fuentes contaminantes y en especial aquellas que trabajan en granjas avícolas, en procesos de sanitización, alistamiento, recepción de aves, cría, levante, producción, clasificación y despacho de huevo, esto es porque sus actividades son fundamentales para asegurar la inocuidad de los productos.
    p.mb-5(data-aos="fade-right") A continuación, se presentan los aspectos de limpieza y desinfección que se debe tener presente al momento de realizar actividades relacionadas con la clasificación del huevo o cualquier manipulación de alimentos.

    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--azul.p-4(titulo="1. Lavado de manos y uñas")
        .row.justify-content-center 
          .col-lg-2.col-md-3.col-8 
            img(src='@/assets/curso/temas/tema2/tema2-4.svg' alt='')
          .col-lg-10.col-md-9.col-12
            p Todo personal que tenga contacto directo con los alimentos y los manipule frecuentemente, debe lavarse las manos, incluido los visitantes. Por lo tanto, se debe tener una estricta medida de higiene. 
            p Para lavarse las manos adecuadamente, según Malekian Fatemeh et al. (2011), es necesario seguir estos pasos cuyo procedimiento completo, se realiza entre 20 y 25 segundos. 
          .col-12 
            p #[b 1.] Humedecer brazos y manos con agua corriente a una temperatura de más o menos 38 °C o en su defecto la que se pueda tolerar. 
            p #[b 2.] Aplicar jabón suficiente y restregar hasta formar una buena cantidad de espuma. 
            p #[b 3.] Frotar brazos y manos de acuerdo a lo sugerido en las técnicas de lavado de manos, limpiando entre los dedos y debajo de las uñas, este procedimiento debe durar entre 10 y 15 segundos. 
            p #[b 4.] Enjuagar brazos y manos con abundante agua asegurándose de retirar todo el jabón y la suciedad. 
            p #[b 5.] Secar los brazos y manos con una toalla de papel o un secador de aire caliente.
      .tarjeta.tarjeta--azul.p-4(titulo="2. Zona de lavado de manos")
        .row.justify-content-center 
          .col-lg-2.col-md-3.col-8.col-12.mb-3 
            img(src='@/assets/curso/temas/tema2/tema2-5.svg' alt='')
          .col-lg-10.col-md-9.col-12
            p Un lugar para lavado de manos debe tener los siguientes componentes:
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Agua (fría y/o caliente). 
              li 
                i.fas.fa-angle-right
                | Jabón líquido. 
              li 
                i.fas.fa-angle-right
                | Elementos para secarse las manos como toallas desechables. 
              li 
                i.fas.fa-angle-right
                | Caneca de basura para descartar las toallas desechables utilizadas en el secado de manos. 
              li 
                i.fas.fa-angle-right
                | Poner en los puntos de ingreso importantes, carteles con un resumen de las normas de higiene de la granja.
              li 
                i.fas.fa-angle-right
                | Avisos, pancartas o letreros que estén escritos en un lenguaje entendible para todos los trabajadores. 
      .tarjeta.tarjeta--azul.p-4(titulo="3. Baño o ducha, vestimenta, uso de joyas y control de hábitos")
        .row.justify-content-center 
          .col-12 
            p #[b Baño o ducha, vestimenta, uso de joyas y control de hábitos]
          .col-lg-2.col-md-3.col-8 
            img(src='@/assets/curso/temas/tema2/tema2-6.svg' alt='')
          .col-lg-10.col-md-9.col-12
            p Los hábitos de higiene personal tienen un impacto crucial en la manipulación de alimentos y en la magnitud de los riesgos de contaminación asociados. Por tanto, es imperativo considerar las siguientes prácticas: 
          .col-12.mt-3
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | La ducha diaria, completa con agua y jabón y se debe realizar antes de empezar las labores.  
              li 
                i.fas.fa-angle-right
                | La ropa cotidiana puede portar contaminantes como polvo o patógenos, por lo que es necesario usar indumentaria adecuada, incluyendo gorra para el cabello, guardapolvo de tono claro, tapabocas, delantal plástico, guantes y calzado exclusivo. 
              li 
                i.fas.fa-angle-right
                | La vestimenta requerida debe cubrir la cabeza, mantenerse limpia, tener colores claros y ser diseñada para permitir la movilidad. 
              li 
                i.fas.fa-angle-right
                | Los guantes deben estar limpios, preferiblemente de un solo uso y sin daños, con el fin de prevenir fugas. 
              li 
                i.fas.fa-angle-right
                | Las zonas para lavado y secado de ropa deben estar aparte de las áreas de elaboración.  
              li 
                i.fas.fa-angle-right
                | El calzado de trabajo debe estar limpio y distinto al de calle. 
              li 
                i.fas.fa-angle-right
                | No se deben llevar joyas, adornos ni objetos personales durante la manipulación de alimentos para evitar la contaminación. 
              li 
                i.fas.fa-angle-right
                | Ingerir alimentos, mascar chicle, usar perfumes y maquillaje están prohibidos en la planta. 
              li 
                i.fas.fa-angle-right
                | Se debe tener un área para almacenar alimentos y bebidas externos al proceso. 
              li 
                i.fas.fa-angle-right
                | El tabaco está prohibido debido a la transmisión de patógenos y contaminantes. 
              li 
                i.fas.fa-angle-right
                | Las áreas para fumar deben ser controladas y separadas de las áreas de alimentos. 
      .tarjeta.tarjeta--azul.p-4(titulo="4. Lavado de dientes")
        .row.justify-content-center 
          .col-lg-2.col-md-3.col-8 
            img(src='@/assets/curso/temas/tema2/tema2-7.svg' alt='')
          .col-lg-10.col-md-9.col-12
            p Se debe cepillar los dientes para eliminar los restos de comida y evitar contaminación por bacterias en la boca que puedan causar placa bacteriana y caries, el lavado de la boca debe hacerse realizando movimientos de arriba hacia abajo unas 10 a 15 veces cada dos o tres dientes cepillando cuidadosamente la superficie interna de cada diente.
      .tarjeta.tarjeta--azul.p-4(titulo="5. Cuidado del cabello")
        .row.justify-content-center 
          .col-lg-2.col-md-3.col-8 
            img(src='@/assets/curso/temas/tema2/tema2-8.svg' alt='')
          .col-lg-10.col-md-9.col-12
            p El cabello está continuamente mudando y, además, recoge con facilidad, polvo, humos y suciedad. Por esta razón, debe evitarse que entre en contacto con los alimentos. El manipulador no puede tocarse el pelo mientras trabaja con alimentos; en caso de hacerlo ha de lavarse las manos antes de volver a tocar los utensilios o productos.  
            p El pelo debe mantenerse limpio, recogido y con protección que lo cubra por completo, esto debe hacerse durante todo el tiempo laboral. La barba y el cabello facial no se permiten, a no ser que estén protegidos totalmente. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Sistemas de limpieza y desinfección

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-8.col-12
        .cajon.color-primario.p-4 
          p Para que los programas de desinfección sean eficientes y eficaces se debe tener en cuenta el manejo “todo adentro, todo afuera” con el aprovechamiento de los vacíos sanitarios para la ejecución de la limpieza en las instalaciones, los elementos y personal. 
          p.mb-0 La limpieza es un componente fundamental en el saneamiento de un área o instalación, ya que de realizarse correctamente eliminará el 90 % de la materia microbiológica en el área.
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-9.png' alt='')
    
    p.mb-5(data-aos="fade-right") Lo anterior aplicando básicamente dos sistemas, los cuales se complementan:

    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-primario.p-3(style="width:100%")
          h5.text-center.texto-negro Limpieza en seco
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-10.svg', alt='')
          p.text-center Busca eliminar, tanto como se pueda, toda la suciedad y la materia orgánica visible por métodos físicos o mecánicos (estiércol, camas). Se debe hacer con toda la superficie que pueda tener suciedad y se hace preferiblemente desde arriba hacia abajo incluyendo los mismos artículos con los que se hace la limpieza como raspadores o rastrillos; los vehículos de transporte también se deben trabajar de esta forma.
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-2.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta.color-secundario.p-3(style="width:100%")
          h5.text-center Limpieza con líquido o húmeda
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='')
          p.text-center Antes del lavado, se recomienda mojar las superficies de los elementos de aseo y las superficies planas en donde reposa la suciedad para humedecer esos espacios es fundamental contar con un detergente o jabón adecuado según la suciedad o tipo de superficie para cuidar las películas de material. Luego, se procede a realizar un enjuague con abundante agua, que puede aplicar a presión utilizando una manguera, con el objetivo de eliminar cualquier residuo de jabón.

    .row.justify-content-center.align-items-center.mb-5.tarjeta.color-acento-botones.p-4(data-aos="fade-down") 
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-12.svg' alt='')
      .col-md-8.col-12
          p El agua a presión, por lo general, funciona bien en el momento de limpieza aplicando en el remojo y en la finalización para facilitar la labor.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down") 
      .col-md-8.col-12
        p El proceso de desinfección debe ser continúo, puesto que la limpieza logra un alto porcentaje de detalle, pero el porcentaje faltante se alcanza con el proceso de desinfección que habitualmente se elabora con un líquido o polvo desinfectante que pueda ser usado en el ambiente a limpiar, no se recomienda que se haga con elementos tóxicos o nocivos para la salud, para eso se requiere revisar las fichas técnicas y solicitar apoyo a los comerciales de las marcas para evitar algún percance.
        p La desinfección, al igual que la limpieza, debe incluir cada rincón de trabajo de la sección afectada sin dejar espacio quieto, es preferible hacer un solo impacto en ese caso para que todo vuelva a la normalidad lo más pronto posible, en algunos casos se puede aplicar logística de limpieza por medio de planes estructurados para que los sectores trabajados no entorpezcan la labor operativa de la planta o moleste a los animales.
      .col-md-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-13.png' alt='')

    p.mb-5(data-aos="fade-right") Además, existen otros métodos que se pueden utilizar para hacer complementación con la desinfección y estos son nebulización química, peróxido de hidrógeno vaporizado, ozono, dióxido de cloro, ionización, luz ultravioleta, recubrimiento de dióxido de titanio y luz ultravioleta.
      
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos y clasificación de productos de limpieza y desinfección

    p.mb-5(data-aos="fade-right") Para la industria alimentaria son los procesos que van dirigidos a combatir la proliferación y actividad de los microorganismos que pueden contaminar los alimentos y su deterioro. En el área de clasificación de una empresa o granja avícola se utiliza una variedad de productos con los cuales se busca el objetivo de limpiar y desinfectar instalaciones, equipos de selección de huevo, y también los equipos de aplicación de los productos para tal labor.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-4.col-12.m-0.pe-0
        img(src='@/assets/curso/temas/tema2/tema2-14.png' alt='')
      .col-md-8.col-12.m-0.pe-0(style="background-color:#B20D0D")
        .p-2.pt-3.text-white
          p Cuando se realiza la limpieza, se trata de retirar la suciedad con el fin de disminuir o exterminar los microorganismos; desinfectar, por su parte, se define como eliminar en parte las bacterias que se encuentran en un determinado ambiente o superficie de tal forma que no sea nocivo para las personas. 
          p.mb-0 Por tal razón, se debe conocer la variedad de productos que existen en el mercado para realizar esta actividad.

    p.mb-5(data-aos="fade-right") Para realizar el proceso de limpieza los productos utilizados son los detergentes, los cuales son compuestos que reaccionan con la suciedad y facilitan su eliminación, entre los diversos tipos de detergentes se pueden destacar los siguientes:


    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-15.svg')})`, 'background-size': 'contain', 'background-repeat': 'no-repeat'}")
            .tarjeta-flip__contenido.py-4.px-3
              h3.text-center Álcalis inorgánicos
              p Son muy corrosivos, se aclaran mal y suelen usarse para limpiar grasas y proteínas. Los más comunes son la soda cáustica, el carbonato sódico o el hidróxido potásico.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-16.svg')})`, 'background-size': 'contain', 'background-repeat': 'no-repeat'}")
            .tarjeta-flip__contenido.py-4.px-3
              h3.text-center Ácidos
              p.mb-0 Se utilizan para eliminar depósitos de sales minerales. 
              p En esta categoría encontramos los ácidos sulfúricos, nítrico, cítrico o clorhídrico. 
      .col-sm-6.col-xl-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-17.svg')})`, 'background-size': 'contain', 'background-repeat': 'no-repeat'}")
            .tarjeta-flip__contenido.py-4.px-3
              h3.text-center Secuestrantes
              p Reaccionan con el calcio y magnesio del agua, de tal forma que ablandan el agua.

      .col-sm-6.col-xl-3(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-18.svg')})`, 'background-size': 'contain', 'background-repeat': 'no-repeat'}")
            .tarjeta-flip__contenido.py-4.px-3
              h3.text-center Humectantes
              p Reaccionan con la superficie de la suciedad y así es más fácil la acción de otros productos y su retirada. En esta categoría estarían los aniónicos (jabones).

    p.mb-5(data-aos="fade-right") La formulación de un detergente suele estar formado por una combinación de las anteriores; en cambio, cuando se habla de un proceso de desinfección se hace referencia a un desinfectante, es decir, aquel producto químico que, aplicado sobre la superficie a desinfectar, reduce la presencia de microorganismos a niveles que no sean peligrosos para la salud. 

    .row.justify-content-center.align-items-center.mb-5.tarjeta.color-acento-botones.p-4(data-aos="fade-down") 
      .col-md-3.col-10
        img(src='@/assets/curso/temas/tema2/tema2-19.svg' alt='')
      .col-md-7.col-12
          p La desinfección se puede lograr mediante métodos físicos (aplicando vapor de agua o aire caliente) o mediante métodos químicos (utilizando sustancias químicas). 

    p.mb-5(data-aos="fade-right") El método químico, que se deriva del uso de sustancias químicas, es el sistema más utilizado y dentro de este se pueden utilizar diferentes sustancias, entre las cuales se pueden destacar las que se describen en la siguiente tabla.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Desinfectantes químicos] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Tipo de desinfectante 
                th Producto
                th Uso
                th Función  
            tbody
              tr
                th.text-center(rowspan="3") Alcalino
                td.p-2 Cal.
                td.p-2 Cobertura de heces o cadáveres en tierra.
                td.p-2 Mitigación de olores y fluidos.
              tr
                td.p-2 Soda cáustica (2-3 %).
                td.p-2 Desinfección de instalaciones generalmente cuando se tiene sospecha de infecciones.
                td.p-2 Bactericida.
              tr
                td.p-2 Carbonato de sodio (4-5 %).
                td.p-2 Desinfección de instalaciones generalmente cuando se tiene sospecha de virus.
                td.p-2 Viricida. Exposición: 15 min.
              tr
                th.text-center(rowspan="2") Halógenos
                td.p-2 Yodo (2.5 % en alcohol de 90 °GL).
                td.p-2 Desinfección de agua para tomar o piel.
                td.p-2 Desinfectante de contacto.
              tr
                td.p-2 Cloro (2-5 %).
                td.p-2 Desinfección de agua potable (0.1 ppm), sanitizante, superficies, aguas negras, etc.
                td.p-2 Desinfectante de amplio espectro exposición: contacto.

    p.mb-3(data-aos="fade-right") También se cuenta con ácidos que, por lo general, son usados en la desinfección y limpieza profunda, pero se recomienda su uso bajo supervisión profesional, ya que el riesgo a la salud es notable junto con su tratamiento. 
    p.mb-5(data-aos="fade-right") En caso de que el cuerpo entre en contacto directo con este tipo de productos, se recomienda visitar al médico más cercano, sobre todo si se presenta malestar, mareo, comezón o envenenamiento. Las cantidades de uso de estos productos químicos son dadas según la salubridad del ambiente, se deben trabajar siempre con todos los artículos de protección personal como guantes, gafas y protección general para la piel.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Protocolos de limpieza y desinfección, monitoreo y seguimiento

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-md-8.col-lg-8.col-12
        .cajon.color-primario.p-4 
          p.mb-0 En las diversas zonas donde se realizan los procesos de la producción avícola se debe tener planteado un protocolo que se ajuste a la infraestructura, elementos y actividades desarrolladas, sin embargo, en general se puede decir que todos ellos, deben cumplir con el objetivo de eliminar cualquier suciedad y reducir a un nivel aceptable los microorganismos contaminantes que puedan interferir con el producto final, que en este caso es el huevo. Además, para esta labor se exige que los productos utilizados para limpieza y desinfección sean avalados y aprobados por la industria alimentaria.
      .col-md-4.col-lg-4.col-12
        img(src='@/assets/curso/temas/tema2/tema2-20.png' alt='')

    p.mb-5(data-aos="fade-right") El protocolo de limpieza y desinfección debe contemplar la planeación, el proceso, verificación y monitoreo tal como se muestra en la siguiente tabla.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Planteamiento, fases y verificación del protocolo de limpieza y desinfección] 
      .col-12(data-aos="fade-right")
        .tabla-a.color-primario.tabla-3
          table(style="min-width:auto")
            caption Nota. Tomada de Inprovo (2016).
            thead.text-small
              tr
                th.text-center(style="width:20%") Planteamiento
                td.p-2 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Zonas y superficies a limpiar, y objetivo requerido en cada caso.
                    li 
                      i.lista-ul__vineta
                      | Momento y frecuencia de la limpieza (según su riesgo para los huevos).
                    li 
                      i.lista-ul__vineta
                      | Responsables de las tareas de limpieza y desinfección, y formación específica sobre estas.
                    li 
                      i.lista-ul__vineta
                      | Registro de las tareas realizadas.
                    li 
                      i.lista-ul__vineta
                      | Detergente y/o desinfectante a emplear, indicando concentraciones, tiempos de actuación y modo de aplicación. Las fichas de seguridad de estos tienen que estar a disposición del personal.
                    li 
                      i.lista-ul__vineta
                      | Equipos y útiles de limpieza, equipos de protección, etc.
            tbody.text-small
              tr
                th.text-center Fases del proceso de limpieza y desinfección
                td.p-2 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Eliminación de restos groseros (cáscaras, huevo, etc.).
                    li 
                      i.lista-ul__vineta
                      | Eliminación de la suciedad mediante la aplicación de un detergente.
                    li 
                      i.lista-ul__vineta
                      | Aclarado con agua potable.
                    li 
                      i.lista-ul__vineta
                      | En su caso, aplicación de un desinfectante.
                    li 
                      i.lista-ul__vineta
                      | Aclarado con agua potable.
                    li 
                      i.lista-ul__vineta
                      | Secado.
              tr
                th.text-center Verificación
                td.p-2 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | El objetivo de la verificación es comprobar si el plan de limpieza se ha realizado y ha sido eficaz para el objetivo previsto.
                    li 
                      i.lista-ul__vineta
                      | #[b Frecuencia:] establecida por la empresa en función de los resultados obtenidos.
                    li 
                      i.lista-ul__vineta
                      | Registrar la verificación junto a las tareas de limpieza y desinfección realizadas.
                    li 
                      i.lista-ul__vineta
                      | El responsable de realizar la verificación debe ser una persona distinta de la que realiza las tareas de limpieza.
                    li 
                      i.lista-ul__vineta
                      | #[b Tipos de comprobación de la eficacia de la limpieza y desinfección:]
                  p #[b a) Comprobación visual:] comprobar de forma visual si las zonas revisadas están limpias y aclaradas.
                  p #[b b) Control analítico:] la empresa, como apoyo de la comprobación visual, puede establecer un plan analítico de superficies para verificar que se cumplen los objetivos del plan de limpieza.





</template>

<script>
export default {
  name: 'Tema2',
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
