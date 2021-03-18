import { useState } from 'react'
import { useRouter } from 'next/router'
import { gql,useMutation } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import { resolvers } from "../apollo/resolvers"
import Field from '../components/Field'
import Header from '../components/Header'
import {Button,Form} from "react-bootstrap";

const Register = gql`
  mutation Register($email:String!,$password:String!,$phoneNum:String!) {
    signUp(input:{email:$email,password:$password,phoneNum:$phoneNum} ) {
      User{
        email
        password
        phoneNum
      } 
    }
  }
`

function SignUp() {
  const [register] = useMutation(Register)
  const [errorMsg, setErrorMsg] = useState()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password
    const phoneNumElement = event.currentTarget.elements.phoneNum

    try {
      await register({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
          phoneNum: phoneNumElement.value
        }
      })

      router.push('/signin')
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <div className="signUp">
      <Header />
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          autoComplete="email"
          required
          label="Email"
        />
        <Field
          name="password"
          type="password"
          autoComplete="password"
          required
          label="Password"
        />
        <Field
          name="passwordConfirmation"
          type="password"
          autoComplete="password"
          required
          label="Password Confirmation"
        />
        <Field
          name="phoneNum"
          type="phoneNum"
          autoComplete="phoneNum"
          required
          label="Phone Number"
        />
        <Button size="lg" style={{ margin: "15px 50px", align: "center:" }} variant="dark" type="submit">
            Register
        </Button>
        <Button size="lg" style={{ margin: "15px 50px", align: "center:" }} variant="dark" href="/login">
            Login
        </Button>
      </form>
  
</div>
  )
}

export default SignUp
