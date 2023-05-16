import { styled } from 'styled-components'

export const Box = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3.5px);
`

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1126px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 2.5rem;
  font-size: 0.875rem;

  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 5px;
  color: ${(props) => props.theme['purple-dark']};
`

export const ShoppingCartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  position: relative;

  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow-light']};
`

export const Total = styled.span`
  background-color: ${(props) => props.theme['yellow-dark']};
  width: 1.2rem;
  height: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  border-radius: 50%;

  color: ${(props) => props.theme.white};

  position: absolute;
  top: -5px;
  right: -5px;
`
