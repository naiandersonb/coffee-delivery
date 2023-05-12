import { styled } from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 5px;
`
export const Button = styled.button`
  width: 1.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
