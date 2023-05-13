import { styled } from 'styled-components'

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
