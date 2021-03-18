import { ApolloServer } from 'apollo-server-micro'
const { schema } = require('../../apollo/schema');
const { resolvers } = require('../../apollo/resolvers');

const apolloServer = new ApolloServer({
  schema:schema,
  rootValue:resolvers,
  context(ctx) {
    return ctx
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
