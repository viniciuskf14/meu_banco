import React from 'react';
import {Container,Header, LogImg, MenuContainer, MenuItemLink, Title} from './style';
import {
  IoStatsChartOutline,
  IoArrowUpSharp,
  IoArrowDownSharp, 
  IoEnterOutline
  } from 'react-icons/io5';
import LogoImg from '../../assets/logo.svg'


const Aside: React.FC =() =>{
    return (
        <Container>
        <Header>
          <LogImg src={LogoImg} alt ="Logo meu banco" />
          <Title>Meu Banco</Title>
        </Header>

        <MenuContainer>
        
           <MenuItemLink href ="/Dashboard" >
            <IoStatsChartOutline/>
            Dashboard
            </MenuItemLink>
            
            <MenuItemLink href ="/list/entry-balance" >
            <IoArrowUpSharp/>
            Entradas
            </MenuItemLink>
            
            <MenuItemLink href ="#" >
            <IoArrowDownSharp/>
            Saídas
            </MenuItemLink>
            
            <MenuItemLink href ="#" >
            <IoEnterOutline/>
            Sair
            </MenuItemLink>
        </MenuContainer>

        </Container>);
}

export default Aside;