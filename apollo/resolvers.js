const { createUser } = require('../lib/user');
const resolvers = {
    Query: {
        getFood:({id})=> {
            return new Food(id, Food[id])
        }
    },
    Mutation: {
        async signUp(args) {
            const user = await createUser(args.input);
            return { user };
        },
    },
};

export { resolvers };