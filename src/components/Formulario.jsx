import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9797FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export default function Formulario() {
    const [SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas)
  return (
    <form>
        <SelectMonedas></SelectMonedas> 
        <InputSubmit type="submit" value="Cotizar"></InputSubmit>
    </form>
  )
}
