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
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &.active {
    border: 1px solid ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
