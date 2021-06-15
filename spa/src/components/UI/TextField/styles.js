import styled, { css } from 'styled-components'
import { colors } from '../../../styles/global'

export const Wrapper = styled.div`
  ${({ w100 }) => w100 && css`
    width: 100% !important;
  `}
  position: relative;
  height: 50px;
  overflow: hidden;
  width: fit-content;
`

export const InputBase = styled.input`
  ${({ w100 }) => w100 && css`
    width: 100% !important;
  `}
  height: 100%;
  color: #000;
  padding-top: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  &:focus + .label-name .content-name,
   :not(:placeholder-shown) + .label-name .content-name {
    transform: translateY(-175%);
    font-size: 11px;
    color: ${({ color }) => color || colors['primary'] };
  }
  &:focus + .label-name::after {
    transform: translateX(0%);
  }
`

export const LabelBase = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid black;
  color: #595f6e;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid ${({ color }) => color || colors['primary'] };
    transform: translate(-100%);
    transition: all 0.2s ease;
  }
  > .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.2s ease;
    font-size: 1rem;
  }
`