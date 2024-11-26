# Alfie GraphQL Mock Server

In order to mock Alfie GraphQL API we created a JavaScript script that creates a server - using Apollo Server - to listen to requests and mock required responses.

## Onboarding

As a first step please consider reading the following documentation

### GraphQL
https://graphql.com/learn/what-is-graphql/

### Apollo Server 
https://www.apollographql.com/docs/apollo-server/

### Schema
https://www.apollographql.com/docs/apollo-server/schema/schema

## Structure

### index.js

Where initialisation of either server - with the respective schema and mocks are done

### package.json

Where node dependencies are handled

### *.graphqls

Schema's files

## Running Mock Server

We will assume that you have already cloned the project and have node/npm already available on your computer. If not please do that before going further.

1. Install dependencies

```bash
npm install apollo-server graphql
```

2. Initialize server (do the following cmd on the root of the project)

```bash
node index.js
```

3. Server available at http://localhost:4000 - if you paste this URL in a browser you will see Apollo testing screen
