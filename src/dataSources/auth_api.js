import { RESTDataSource } from "apollo-datasource-rest";
import {auth_api_url} from '../utils/msAddress.js';

export default class AuthAPI extends RESTDataSource {
    baseURL = auth_api_url || '';
  
    async newUser(body) {
        return await this.post('/user/', body);
    }

     async login(body) {
        return await this.post('/login/', body);
        
    }
}




