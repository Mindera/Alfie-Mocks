let brandsResolvers = require("./brand");
let navigationResolvers = require("./navigation");
let productResolvers = require("./product");
let suggestionResolvers = require("./suggestion");

// Instantiating mocks variable
const resolvers = {
  Query: Object.assign({},
    brandsResolvers,
    navigationResolvers,
    productResolvers,
    suggestionResolvers  
  )
};

module.exports = resolvers;
