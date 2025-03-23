import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: #495E57;
  padding: 1rem 2rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  animation: slideDown 0.5s ease-out forwards;
  width: 100%;
  box-sizing: border-box;
  
  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  color: #F4CE14;
  font-family: 'Markazi Text', serif;
  letter-spacing: 1px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(244, 206, 20, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #F4CE14;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #F4CE14;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s ease;
      z-index: -1;
    }
    
    &:hover {
      color: #F4CE14;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      
      &::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    background-color: #495E57;
    top: 100%;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    padding: 2rem;
    gap: 1.5rem;
    transition: right 0.3s ease-in-out, box-shadow 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 5px 15px rgba(0, 0, 0, 0.2)' : 'none'};
    border-radius: 0 0 0 12px;
    z-index: 100;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 100;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 28px;
    height: 3px;
    background-color: ${props => props.isOpen ? '#F4CE14' : 'white'};
    margin: 6px 0;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      width: ${props => props.isOpen ? '28px' : '22px'};
      margin-left: ${props => props.isOpen ? '0' : 'auto'};
    }

    &:last-child {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
      width: ${props => props.isOpen ? '28px' : '18px'};
      margin-left: ${props => props.isOpen ? '0' : 'auto'};
    }
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Little Lemon</Logo>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book a Table</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;