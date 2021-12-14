import lodash from 'lodash';
import authResolver from "./auth_resolver.js";
import productsResolver from './productsResolver.js';


export default lodash.merge( productsResolver, authResolver);

