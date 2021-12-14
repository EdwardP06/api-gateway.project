import { ApolloError } from "apollo-server-errors";
import fetch from "node-fetch";
import {auth_api_url} from '../utils/msAddress.js';

const authentication = async ({ req }) => {
    const token = req.headers.authorization;
    if (!token) return { userToken: null };
    else {
        try {
            const resp = await fetch(`${auth_api_url}/verify-token`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            if (resp.status == 200) {
                const data = await resp.json();
                return { 
                    userToken: data.username,
                    user: data
                }
            } else {
                throw new ApolloError('Sesión inactiva', 401);
            }
        } catch (e) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${e}`, 500);
        }
    }
}

export default authentication;