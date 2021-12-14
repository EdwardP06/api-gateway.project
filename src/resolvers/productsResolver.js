import { ForbiddenError } from 'apollo-server';

export default {
    Query: {
        product: (_, { productId }, { dataSources }) => dataSources.ProductsAPI.getById(productId),
        products: (_, __, { dataSources }) => dataSources.ProductsAPI.getallproducts(),
    },
    Mutation: {
      createProduct: (_, { productInput }, { dataSources, User }) => {
        return dataSources.ProductsAPI.create(productInput);
        //throw new ForbiddenError('User not able to perform this request');
      },
      updateProduct: (_, { productId, productInput }, { dataSources, User }) => {
        if (User?.is_superuser) return dataSources.ProductsAPI.update(productId, productInput);
        throw new ForbiddenError('User not able to perform this request');
      },
      deleteProduct: (_, { productId }, { dataSources, User }) => {
        if (User?.is_superuser) return dataSources.ProductsAPI.delete(productId);
        throw new ForbiddenError('User not able to perform this request');
      },
    },
  };