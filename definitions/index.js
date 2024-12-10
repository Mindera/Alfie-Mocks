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
const schema = gql`
  ${schemaBase}
  ${schemaBrand}
  ${schemaNavigation}
  ${schemaSearch}
  ${schemaProducts}
`;

module.exports = schema;