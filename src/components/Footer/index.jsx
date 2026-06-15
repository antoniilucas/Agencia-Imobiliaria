import React, { Fragment } from 'react'
import { Container, Copy, Item } from './styles'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import LogoImg from '../../assets/logo.png';

export default function Footer() {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={LogoImg} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit est dolor odio eius doloremque aliquam architecto blanditiis nesciunt voluptatem harum explicabo sit, in vel, illo ullam impedit! Iusto, hic possimus.</p>
                    <nav>
                        <li><span><FaFacebook size={32} /></span></li>
                        <li><span><FaInstagram size={32} /></span></li>
                        <li><span><FaWhatsapp size={32} /></span></li>
                    </nav>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p> © copyright 2026 - ImobilAAA. Todos os direitos reservados.</p>
                <ul>
                    <li>
                        <span>Termos de uso</span>
                    </li>
                    <li>
                        <span>Política de Privacidade</span>
                    </li>
                    <li>
                        <span>Politica de Cookies</span>
                    </li>
                </ul>
            </Copy>
        </Fragment>
    )
}
