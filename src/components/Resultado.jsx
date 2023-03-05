import styled from "@emotion/styled"

const ContenedorResultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`


export default function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <ContenedorResultado>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen de cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion de las ultimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
            <Texto>Ultima actualizacion <span>{LASTUPDATE}</span></Texto>
        </div>
    </ContenedorResultado>
  )
}
