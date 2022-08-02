const Paddocks = {
    slug: 'paddocks',
    admin: {
      useAsTitle: 'name',
    },
    fields: [
      {
        name: 'Nombre',
        type: 'text',
      },
      {
        name: 'Padrón',
        type: 'point',
      },
      {
        name: 'Área',
        type: 'number',
      },
      {
        name: 'Mejora',
        type: 'text',
      },
      {
        name: 'Alambrado',
        type: 'text',
      },
    ],
  };
  
  export default Paddocks;