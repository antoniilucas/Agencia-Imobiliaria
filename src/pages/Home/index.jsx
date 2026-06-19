import React from 'react'
import Card from '../../components/Card'
import { Header, Wrapper } from './styles'
import Banner from '../../components/Banner'

export default function Home() {
    let Cards = []
    for (let i = 0; i < 4; i++){
        Cards.push(<Card key={i} />)
    }
    return (
        <div>
            <Banner />
            <Header>
                <h2>Find the property of your dreams!</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </div>
    )
}
