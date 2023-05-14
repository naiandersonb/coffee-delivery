import { styled } from 'styled-components'

export const ButtonsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
