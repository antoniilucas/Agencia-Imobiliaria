import React from 'react'
import Card from '../../components/Card'
import { Header, Wrapper } from './styles'

export default function Home() {
    let Cards = []
    for (let i = 0; i < 4; i++){
        Cards.push(<Card key={i} />)
    }
    return (
        <div>
            <Header>
                <h2>Find the property of your dreams!</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </div>
    )
}
