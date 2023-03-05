import {useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'
import styled from '@emotion/styled'





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

export default function Formulario({setMonedas}) {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [SelectMonedas, moneda] = useSelectMonedas("Elije tu moneda", monedas)
    const [SelectCriptos, cripto] = useSelectMonedas("Elije tu criptomoneda", criptos)

    useEffect(()=>{
      const consultarAPI = async ()=>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map((cripto)=>{
          const objeto = {
            id:cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto
        })
        setCriptos(arrayCriptos)
      }
      consultarAPI()
      
    },[])

    const handleSubmit = (e)=>{
      e.preventDefault()
      if([moneda, cripto].includes('')){
        setError(true)
        return
      }

      setError(false)
      setMonedas({
        moneda,
        cripto
      })
    }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error> }
      <form onSubmit={handleSubmit}>

          <SelectMonedas/>
          <SelectCriptos/>

          <InputSubmit type="submit" value="Cotizar"></InputSubmit>
      </form>
    </>
  )
}
