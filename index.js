// Importing required dependencies to have an working mock server
const { ApolloServer } = require('apollo-server');

const typeDefs = require("./definitions");
const resolvers = require('./resolvers');

// Setting up server with resolvers and putting it to listen
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
