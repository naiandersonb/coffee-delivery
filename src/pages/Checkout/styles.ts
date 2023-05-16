import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1126px;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 100px;

  display: grid;
  grid-template-columns: 55% 1fr;
  gap: 2rem;

  @media (max-width: 1072px) {
    gap: 1rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-items: center;
    padding: 2rem 1rem;
  }
`

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 1126px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;

  h2 {
    max-width: 30ch;
    text-align: center;
  }

  .empty-order-icon {
    color: ${(props) => props.theme.yellow};
  }
`

export const GoToMenuButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  padding: 1rem;
  border-radius: 6px;
  max-width: 200px;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  span {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme.purple};
  }
`
