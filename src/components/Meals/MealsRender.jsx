import React from "react";
import styled from "styled-components";
import MealsForm from "./MealsForm";

const MealsRender = ({ id, name, price, describtion }) => {
  return (
    <GlobalContainer>
    <ContainerFoods>   
      <h2>{name}</h2>
      <p>{describtion}</p>
      <span>{price}</span>
      </ContainerFoods>
      <div>
        <MealsForm/>
      </div>
    </GlobalContainer>
  );
};

const GlobalContainer = styled.div`
    width: 100%;
    border: 2px solid green;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

const ContainerFoods = styled.div`
    width: 300px;
    height: 180px;
    border: 1px solid red;
`

export default MealsRender;
