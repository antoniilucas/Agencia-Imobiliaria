import React from 'react'
import { Container, Description, Img, Itens } from './styles'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'

export default function Card() {
  return (
    <Container>
        <Img>
        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Img>
        <Description>
            <h4>Apartamento</h4>
            <Itens>
                <span><FaMapMarkerAlt /> Vila Buarque, São Paulo</span>
                <span>R$ 2.400,00 / mês</span>
            </Itens>
            <a href="#">Detalhes <FaArrowRight /></a>
        </Description>
    </Container>
  )
}
