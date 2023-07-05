import React from 'react'
import styled from 'styled-components'
import ButtonOrderBusket from '../buttonOrderBusket/ButtonOrderBusket'

const Header = () => {
  return (
    <Container>
    <Parent>
      <Title>Кыргыз ашканасы</Title>
      <ButtonOrderBusket/>
      </Parent>
    </Container>
  )
}

const Container = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #778899;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    z-index: 10;
`

const Parent = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h2`
    color: white;
`


export default Header
