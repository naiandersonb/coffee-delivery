import { styled } from 'styled-components'

export const OrderDetailContainer = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    max-width: 64px;
  }

  .title {
    color: ${(props) => props.theme['base-text']};
  }

  /* @media (max-width: 1072px) {
    flex-direction: column;
  } */
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .buttons {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  border: none;
  cursor: pointer;
  border-radius: 6px;

  padding: 0.5rem;
  height: 2rem;
  font-size: 0.75rem;
  text-transform: uppercase;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  .trash-icon {
    color: ${(props) => props.theme.purple};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const Price = styled.p`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`
