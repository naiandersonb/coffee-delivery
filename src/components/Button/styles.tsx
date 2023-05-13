import { styled } from 'styled-components'

interface ButtonProps {
  isSelected?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme['base-button']};
  padding: 1rem;
  border-radius: 6px;
  width: 100%;
  border: 1px solid transparent;
  /* border: 1px solid
    ${(props) => (props.isSelected ? props.theme.purple : 'transparent')}; */

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  span {
    color: ${(props) => props.theme.purple};
  }

  transition: background-color 0.2s;

  /* &:active {
    border: 1px solid
      ${(props) => (props.isSelected ? props.theme.purple : 'transparent')};
  } */

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
