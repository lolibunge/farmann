import { buildConfig } from 'payload/config';

import Categories from './collections/Categories';
import Users from './collections/Users';
import Animals from './collections/Animals';
import Breeds from './collections/Breeds';
import Paddocks from './collections/Paddocks';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Animals,
    Paddocks,
    Breeds,
    Users,
  ],
});
