import React from 'react'
import { Container, ContainerForm, Form, Label } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login() {
    return (
        <Container>
            <h2>
                Acesse sua conta
            </h2>
            <p>Entre com seu e-mail e senha</p>
            <ContainerForm>
                <Form>
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="Digite seu e-mail" />
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button>Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}
