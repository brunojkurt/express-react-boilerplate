import React, { useRef, useEffect } from 'react'

import { useServiceContext, useAuthContext } from '../../hooks'
import { TextField, Button } from '../../components/UI'
import { colors } from '../../styles/global'
import {
  Container,
  FormWrapper,
  Form,
  FormItem
} from './styles'

const Login = ({ history }) => {
  const emailField = useRef(null)
  const passwordField = useRef(null)

  const { login, token } = useAuthContext()
  const { auth } = useServiceContext()

  useEffect(() => {
    const checkAuth = () => {
      if (token) {
        const { state } = history.location
        history.push(state?.from ? state.from : '/home')
      }
    }

    checkAuth()
  }, [token, history])

  const handleLoginSuccess = (data) => {
    const { user, token } = data
    login(user, token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: emailField.current.value,
      password: passwordField.current.value
    }
    await auth.login(data, handleLoginSuccess, (error) => console.log(error))
  }

  return (
    <Container size="md">
      <FormWrapper shadow>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormItem>
            <TextField
              ref={emailField}
              label="E-mail"
              type="email"
              required
              w100
            />
          </FormItem>
          <FormItem>
            <TextField
              ref={passwordField}
              label="Senha"
              type="password"
              required
              w100
            />
          </FormItem>
          <FormItem>
            <Button
              type="submit"
              variant="contained"
              background={colors['primary']}
              color={colors['secondary']}
              ripple
              w100
            >
              Entrar
            </Button>
          </FormItem>
        </Form>
      </FormWrapper>
    </Container>
  )
}

export default Login