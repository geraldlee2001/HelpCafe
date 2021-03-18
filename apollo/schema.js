import {buildSchema} from 'graphql'

const schema = buildSchema(`
type User {
  id:String!
  email: String!
  password: String!
  phoneNum: String!
}

type Food{a
  foodId: String!
  name:String!
  price:Float!
  foodType:String!
}

input FoodInput{
  foodId: String!
  name:String!
  price:Float!
  foodType:String!
}

input SignUpInput {
  email: String!
  password: String!
  phoneNum: String!
}

input SignInInput {
  email: String!
  password: String!
}

type Query {
  getFood(id:ID): Food!
}

type Mutation {
  signUp(input: SignUpInput!): User
  signIn(input: SignInInput!): User
  signOut: Boolean!
  createFood(input:FoodInput) :Food
}
`)

export {schema};
