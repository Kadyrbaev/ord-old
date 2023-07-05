import React from 'react'
import styled from 'styled-components'
import MainImg from "../assets/images/mainImg.avif"
import MealsTitle from '../Meals/MealsTitle'

const Main = () => {
  return (
    <>
    <MainContainer>
      <MainImage src={MainImg} alt="MainImg"/>
    </MainContainer>
    <MealsTitle/>
    </>
  )
}

const MainContainer = styled.main`
    width: 100%;
    height: 600px;
`

const MainImage = styled.img`
    width: 100%;
    height: 90%;
    z-index: 0;
    overflow: hidden;
    border-radius: 0px 0px 18px 18px;
`



export default Main
