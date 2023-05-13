import { styled } from 'styled-components'

export const FormContentContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  .number-and-complement,
  .district-city-UF {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .flag {
    width: 100%;
    position: relative;

    i {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.875rem;
      font-size: 0.75rem;
    }
  }
`
interface InputProps {
  maxWidth?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.75rem;
  font-size: 0.875rem;
  max-width: ${(props) => props.maxWidth};
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};
  position: relative;

  &::placeholder {
    color: ${(props) => props.theme['base-placeholder']};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
