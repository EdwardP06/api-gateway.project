import { ApolloServer} from "apollo-server";

import AuthAPI from './dataSources/auth_api.js';
import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';
import ProductsAPI from './dataSources/productsApi.js';
import authentication from './utils/authentication.js';

const server = new ApolloServer({
  context: authentication, 
  typeDefs,
  resolvers,
  dataSources:()=>({
    
    ProductsAPI: new ProductsAPI(),
    AuthAPI: new AuthAPI
  }),
  introspection: true,
  playground: true,
});

server.listen().then(({url}) =>{
  console.log(`🚀  Server ready at ${url}`);
}) 


