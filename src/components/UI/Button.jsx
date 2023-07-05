import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonAdd style={props} >{props.children}</ButtonAdd>
  )
}

const ButtonAdd = styled.button`
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "30px"};
    background-color: #DAA520;
    border: 2px solid gray;
    border-radius: 7px;
    color: white;
    font-size: 17px;
`

export default Button
