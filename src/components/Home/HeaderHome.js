import React from 'react';
import styled from 'styled-components';
import background from '../../img/home-img/bg-home.png'
import Nav from '../Nav';

const Header = (props) => {

    const Header = styled.header`
        background-image: url(${background});
        width: 100%;
        height: 100vh;
        z-index: 0;
    `

    const ElementHeader = styled.div`
        display: flex;
        flex-direction: column;
        padding-left: 110px;
        padding-top: 150px;
        z-index: 2;
    `

    const Title = styled.h1`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 90px;
        color: #FFFFFF;
    `

    const Button = styled.button`
        width: 240px;
        height: 50px;
        left: 125px;
        top: 502px;
        background: #EB8D61;
        border-radius: 30px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        border: none;
    `
    return (
        <Header>
            <Nav />
            <ElementHeader>
                <Title>READY FOR<br/>THE TRIPPIEST CITY ?</Title>
                <Button>Choose a city</Button>
            </ElementHeader>
        </Header>
    );
}

export default Header;