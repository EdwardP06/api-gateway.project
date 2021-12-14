import { gql } from "apollo-server";

const authTypeDefs = gql`
    
    type User {
        id: Int
        is_superuser: Boolean
        username: String!
        password: String!
        name: String!
        email: String!
        account: Account

        
    }
    type Query {
        users: [User]
        
    }
    type Account{
        totalcompra:Int
        lastChangeDate:String
    }

    type Login {
        refresh: String!
        access: String!
    }

    type Query {
        userInfo: User
        
    } 

    type Mutation {
        newUser(
            is_superuser: Boolean
            username: String!
            password: String!
            name: String!
            email: String!
            totalcompra:Int
            lastChangeDate:String
            account: [String]
        ): User
     
        login(
            username: String!
            password: String!
        ): Login!
    }
   
    
`;

export default authTypeDefs;