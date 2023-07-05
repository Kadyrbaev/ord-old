import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import MealsRender from './MealsRender'

const foods = [
    {
        id: "1",
        name: "Куурдак",
        describtion: " кыргыз элинин эң сыйлуу тамактарынын бири.",
        price: "300"
    },
    {
        id: "2",
        name: "Бешбармак",
        describtion: "майда тууралган эттен жасалган кыргыздын эң сый тамагы",
        price: "250"
    },
    {
        id: "3",
        name: "Чучук",
        describtion: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
        price: "500"
    },
    {
        id: "4",
        name : "Быжы",
        describtion: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак",
        price: "450"    
    }
]

const MealsItems = () => {
  return (
    <Section>
    <Card>
      {foods.map((foods) => {
        return (
            <MealsRender key={foods.id} name={foods.name} price={foods.price} describtion={foods.describtion} />
        )
      })}
    </Card>
    </Section>
  )
}

const Section = styled.section`
    width: 80%;
`

export default MealsItems
