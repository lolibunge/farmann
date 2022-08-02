const Animals = {
    slug: 'animals',
    admin: {
      useAsTitle: 'Categoría',
    },
    access: {
      read: () => true,
    },
    fields: [
      
      {
        name: 'Categoría', // required
        type: 'relationship', // required
        relationTo: 'categories', // required
        hasMany: false,
      },
      {
        name: 'Fecha de Nacimiento',
        type: 'date',
      },
      {
        name: 'Datos Parentales', // required
        type: 'group', // required
        fields: [ // required
          {
            name: 'Padre',
            type: 'text',
          },
          {
            name: 'Madre',
            type: 'text',
          }
        ]
      },
      {
        name: 'Sexo', // required
        type: 'radio', // required
        options: [ // required
          {
            label: 'Hembra',
            value: 'hembra',
          },
          {
            label: 'Macho',
            value: 'macho',
          },
        ]
      },
      {
        name: 'Potreros', // required
        type: 'relationship', // required
        relationTo: 'paddocks', // required
        hasMany: false,
      },
      {
        name: 'Micras',
        type: 'number'
      },
      {
        name: 'Observaciones',
        type: 'textarea',
      },
      {
        name: 'Raza', // required
        type: 'relationship', // required
        relationTo: 'breeds', // required
        hasMany: false,
      },
      {
        name: 'Peso Kg',
        type: 'number'
      }
      
    ],
  }
  
  export default Animals;