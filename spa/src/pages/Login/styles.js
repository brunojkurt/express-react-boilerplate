import styled from 'styled-components'
import {
  Container as ContainerBase,
  Paper
} from '../../styles/global'

export const Container = styled(ContainerBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const FormWrapper = styled(Paper)`
  width: 100%;
  max-width: 400px;
  padding: 8px;
`
export const Form = styled.form`
  width: 100%;
  height: auto;
`
export const FormItem = styled.div`
  margin: 20px 0;
  :first-of-type {
    margin: 0 0 20px 0;
  }
`