import { ApolloError } from "apollo-server-errors";

const authResolver = {
    Query: {
        userInfo: async(root, args, { user }) => {
            if (!user) {
                throw new ApolloError("No estás autorizado para mirar esta información", 401);
            }
            return await user;
        }  
    }, 
    Mutation: {
        newUser: async(root, args, { dataSources }) => {
            return await dataSources.AuthAPI.newUser(args);
        },
        
        login: async(root, args, { dataSources }) => {
            return await dataSources.AuthAPI.login(args);
        }
    }
};

export default authResolver;