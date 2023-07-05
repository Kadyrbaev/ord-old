import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <InputTag style={props} type={props.type} value={props.value} onChange={props.onChange} />
  )
}

const InputTag = styled.input`
    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "25px"};
    border: 2px solid gray;
`

export default Input
