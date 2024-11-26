// Importing required dependencies to have an working mock server
const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs');
const { join } = require('path');
const { gql } = require('apollo-server');

// Reading schema files that are also used in apps
const schemaBase = readFileSync(join(__dirname,'schema-base.graphqls'), { encoding: 'utf-8' });
const schemaBrand = readFileSync(join(__dirname,'schema-brand.graphqls'), { encoding: 'utf-8' });
const schemaNavigation = readFileSync(join(__dirname,'schema-navigation.graphqls'), { encoding: 'utf-8' });
const schemaSearch = readFileSync(join(__dirname,'schema-search.graphqls'), { encoding: 'utf-8' });
const schemaProducts = readFileSync(join(__dirname,'schema-products.graphqls'), { encoding: 'utf-8' });

// Merging previous schemas and creating the graphql final schema
const typeDefs = gql`
  ${schemaBase}
  ${schemaBrand}
  ${schemaNavigation}
  ${schemaSearch}
  ${schemaProducts}
`;

const resolvers = require('./Mocks/mockIndex');

// Setting up server with resolvers and putting it to listen
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
