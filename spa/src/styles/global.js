import styled, { createGlobalStyle, css } from 'styled-components'

// Fonts
import QuicksandFont from './fonts/Quicksand'

export const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

export const sizes = {
  xs: '400px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

export const colors = {
  primary: '#000080',
  secondary: '#FFF',
  title: '#666666',
  success: '#75e5d5',
  error: '#e57878',
  warning: '#f9f78b',
  info: '#8beaf9',
  defaultBackground: '#e0e0e0'
}

const ShadowCss = css`
  box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.5);
`

export const Container = styled.main`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  ${({size}) => size && css`
    max-width: ${sizes[size]};
  `}
`

export const Paper = styled.div`
  width: auto;
  height: auto;
  box-sizing: border-box;
  background-color: #FFF;
  border-radius: ${({sharp}) => sharp ? 0 : 5}px;
  ${({shadow}) => shadow && ShadowCss }
`

const GlobalStyle = createGlobalStyle`
  ${QuicksandFont}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Quicksand', sans-serif;
  }
`

export default GlobalStyle