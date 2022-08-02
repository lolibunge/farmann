import { buildConfig } from 'payload/config';
import path from 'path';

import Categories from './collections/Categories';
import Users from './collections/Users';
import Animals from './collections/Animals';
import Breeds from './collections/Breeds';
import Paddocks from './collections/Paddocks';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  cookiePrefix: 'payload',
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './assets/styles/stylesheet.scss'),
  },
  collections: [
    Categories,
    Animals,
    Paddocks,
    Breeds,
    Users,
    {
      slug: 'pages',
      fields: [
          {
              name: 'title',
              type: 'text',
              required: true,
          },
          {
            name: 'Lista de Animales',
            type: 'relationship',
            relationTo: 'animals',
        },
          {
              name: 'content',
              type: 'richText',
              required: true,
          }
      ]
  }
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    }
  },
  globals: [
    {
        slug: 'header',
        fields: [
            {
                name: 'nav',
                type: 'array',
                fields: [
                    {
                        name: 'page',
                        type: 'relationship',
                        relationTo: 'pages',
                    },
                ]
            }
        ]
    }
]
});
