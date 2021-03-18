import { ApolloServer } from 'apollo-server-micro'
import schema from '../../apollo/schema'
import resolvers from '../../apollo/resolvers'

const apolloServer = new ApolloServer({
  schema: schema,
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
