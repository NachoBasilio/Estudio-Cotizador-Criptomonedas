import styled from '@emotion/styled'
import {useState} from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export default function useSelectMonedas(texto, opciones) {//Un hook va a retornar un objeto o un arreglo
    const [state, setState] = useState("")

    const SelectMonedas = ()=>(
        <>
            <Label>{texto}</Label>
            <Select
            value={state}
            onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {
                    opciones.map(op => (
                        <option
                        key={op.id}
                        value={op.id}
                        >
                           {op.nombre}
                        </option>
                    ))
                }
            </Select>
        </>
    )
    return [SelectMonedas, state]
}
