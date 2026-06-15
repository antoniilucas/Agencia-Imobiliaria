import React, { Fragment } from 'react'
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from './styles'
import TopBanner from '../../components/TopBanner'

export default function Imobi() {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae possimus provident recusandae similique totam temporibus! Unde nisi nostrum temporibus dolor, corporis itaque accusamus error quod placeat earum sed cum repellat!</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>John Doe</h3>
              <p>Descrição do usuario</p>
              <p>teste@teste.com</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para Contato</h3>
            <p>(11) 111-1111</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Entre em Contato</h3>
            <form>
              <input type="text" placeholder='Nome:' />
              <input type="email" placeholder='Email:' />
              <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem:'></textarea>
              <button>Enviar Mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}
