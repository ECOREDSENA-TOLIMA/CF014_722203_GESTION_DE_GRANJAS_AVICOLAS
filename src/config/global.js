export default {
  global: {
    componenteFormativo:
      'Inspección, selección, inventarios y almacenamiento de huevo de gallina',
    descripcionCurso:
      'Al verificar las diferentes actividades que se realizan para garantizar el proceso de calidad del huevo se asegura inocuidad del producto hasta la mesa del consumidor, por lo que los procesos de inspección cobran relevancia, con el fin de comprobar la calidad del producto final.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Limpieza y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de limpieza y desinfección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Tipos y clasificación de productos de limpieza y desinfección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Protocolos de limpieza y desinfección, monitoreo y seguimiento',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bandejas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Parámetros de calidad de bandejas para acomodación y apilado de huevos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Disposición final de bandejas descartadas y/o usadas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Empaque y embalaje de huevos de gallina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de empaque y embalaje',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Parámetros de calidad del empaque y embalaje',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Protocolos de inspección del proceso de empaque y embalaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Protocolos de inspección del almacenamiento de huevo de gallina',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_14_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Limpieza y desinfección',
      referencia:
        'Cooprocesos Cali. (2014). <em>Programa de limpieza y desinfección en empresas productoras de huevo.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sK_B6wNGQYs',
    },
    {
      tema: 'Limpieza y desinfección',
      referencia:
        'Fuentes, M. (2018). <em>Limpieza y desinfección en la industria alimentaria.</em> Empresa & Limpieza.',
      tipo: 'Artículo',
      link:
        'https://empresaylimpieza.com/art/862/limpieza-y-desinfeccion-en-la-industria-alimentaria',
    },
    {
      tema:
        'Parámetros de calidad bandejas para acomodación y apilado de huevos.',
      referencia:
        'Siembra y cosecha TV. (2021). <em>Comercialización y conservación de huevos.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/QuMgNHenEKg',
    },
    {
      tema: 'Empaque y embalaje de huevos de gallina',
      referencia:
        'Cuéllar, S., J. A. (2020). <em>Recolección y transporte de huevos: aspectos clave.</em> Veterinaria Digital.com.',
      tipo: 'Artículo - Video',
      link:
        'https://www.veterinariadigital.com/articulos/recoleccion-y-transporte-de-huevos-aspectos-clave/',
    },
    {
      tema: 'Protocolos de inspección proceso de empaque y embalaje',
      referencia: 'Fenavi. (2011). <em>Buenas prácticas avícolas.</em> Fenavi.',
      tipo: 'Guía',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/C%C3%93DIGO-BUENAS-PR%C3%81CTICAS-AV%C3%8DCOLAS-BPAV-V2.pdf',
    },
    {
      tema: 'Protocolos de inspección almacenamiento de huevo de gallina',
      referencia:
        'La finca de hoy. (2021). <em>Consejos para la comercialización de huevos sin que se afecte la inocuidad.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/O8_IAOsqGEw',
    },
    {
      tema: 'Protocolos de inspección almacenamiento de huevo de gallina',
      referencia:
        'ICA. (2014). <em>Las buenas prácticas de bioseguridad en granjas de reproducción aviar y plantas de incubación, conceptos básicos para su aplicación en Colombia.</em> ICA.',
      tipo: 'Guía',
      link:
        'https://www.ica.gov.co/getattachment/af9943f9-87a5-4897-9962-2d414fa0fdbf/Publicacion-10.aspx#:~:text=Las%20granjas%20y%20plantas%20de,las%20medidas%20de%20bioseguridad%20establecidas',
    },
  ],
  glosario: [
    {
      termino: 'Embalaje',
      significado:
        'conjunto de elementos que permiten proteger los envases primarios y los empaques de las influencias externas y lograr un mantenimiento y almacenamiento adecuados.',
    },
    {
      termino: 'Empaque',
      significado:
        'recipiente que contiene huevos para su entrega, que los cubre totalmente.',
    },
    {
      termino: 'Envase primario',
      significado:
        'artículo que está en contacto directamente con el alimento, destinado a contenerlo desde su producción hasta su entrega al consumidor, con la finalidad de protegerlo de agentes externos.',
    },
    {
      termino: 'Huevo de gallina',
      significado:
        'es el producto de figura ovoide, proveniente de la ovoposición de la gallina (<em>Gallus gallus</em>), constituida por la cáscara, membranas, cámara de aire, clara, chalazas, yema y germen.',
    },
    {
      termino: 'Huevo fisurado',
      significado:
        'huevo que presenta la cáscara rota pero la membrana se encuentra intacta.',
    },
    {
      termino: 'Huevo fresco',
      significado:
        'huevo contenido en su cáscara, que no ha sido sometido a ningún procedimiento de lavado y/o refrigeración, conservación, fertilización y/o incubación y que cumple con lo estipulado en la presente norma.',
    },
    {
      termino: 'Huevo roto o quebrado',
      significado:
        'huevo que presenta grietas tanto en la cáscara como en la membrana, exponiendo su contenido a la contaminación.',
    },
    {
      termino: 'Huevo sucio',
      significado:
        'huevo que presenta material adherido a la cáscara (sangre, excremento de aves y/o restos de huevo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, C. E. (2015). <em>Evaluación ambiental de residuos en la granja avícola CAFARI del municipio de San Pedro - Valle del Cauca.</em> Universidad Nacional Abierta y a Distancia - UNAD. Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente, Palmira. ',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/3828/79820636.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Fenavi. (2011). <em>Código de buenas prácticas avícolas. BPAV.</em> Fenavi. ',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/C%C3%93DIGO-BUENAS-PR%C3%81CTICAS-AV%C3%8DCOLAS-BPAV-V2.pdf',
    },
    {
      referencia:
        'ICA. (2014). <em>Las buenas prácticas de bioseguridad en granjas de reproducción aviar y plantas de incubación, conceptos básicos para su aplicación en Colombia.</em> ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/af9943f9-87a5-4897-9962-2d414fa0fdbf/Publicacion-10.aspx#:~:text=Las%20granjas%20y%20plantas%20de,las%20medidas%20de%20bioseguridad%20establecidas',
    },
    {
      referencia:
        'Inprovo. (2016). <em>Guía de embalaje APPC en centros de embalajes de huevos de gallina.</em> Gobierno de España. ',
      link:
        'https://www.aseprhu.es/wp-content/uploads/2017/07/AF-GUIA-APPCC_2.pdf',
    },
    {
      referencia:
        'Instituto de Estudios del Huevo. (2011). <em>El gran libro del huevo.</em> IEH. ',
      link:
        'https://www.institutohuevo.com/wp-content/uploads/2021/10/EL-GRAN-LIBRO-DEL-HUEVO.pdf',
    },
    {
      referencia:
        'Mata-Haro, V., Acedo-Felix, E., Pinelli-Saavedra, A. (2013). <em>Bioseguridad limpieza y desinfección.</em> (Cap. II). ',
      link:
        'https://www.produccion-animal.com.ar/libros_on_line/51-manual_porcino/02-BuenasPracticasCap2.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabiola Monroy Rivera',
          cargo: 'Instructora',
          centro:
            'Regional Santander - Centro Agroempresarial y Turístico de Los Andes',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
