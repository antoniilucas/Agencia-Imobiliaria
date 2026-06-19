import React from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Cadastro() {
    return (
        <Container>
            <h2>
                Crie sua conta
            </h2>
            <p>Cadastre-se para acessar a plataforma!</p>
            <ContainerForm>
                <Form>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Digite seu nome" />
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="Digite seu e-mail" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button>Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}
