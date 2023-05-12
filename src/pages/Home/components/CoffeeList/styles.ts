import { styled } from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;
  max-width: 1126px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const Grid = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1099px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
