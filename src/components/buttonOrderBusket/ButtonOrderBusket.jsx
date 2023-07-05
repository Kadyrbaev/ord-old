import React from 'react'
import styled from 'styled-components'
import OrderBusket from "../assets/icons/OrderBasket.png"

const ButtonOrderBusket = ({count}) => {

  return (
    <ContainerBusket>
      <BusketImage src={OrderBusket} alt="OrderBusket"/>
      <p>Your Orders</p>
      <Count>{count || 0}</Count>
    </ContainerBusket>
  )
}

const ContainerBusket = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: darkgray;
    border-radius: 20px;
    border: none;
    font-size: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Count = styled.span`
    padding: 3px 15px;
    border-radius: 20px;
    background-color: gold;
`

const BusketImage = styled.img`
  width: 30px;
  height: 30px;
`

export default ButtonOrderBusket



