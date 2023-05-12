import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.article`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px 40px 8px 40px;

  position: relative;
  padding-top: 8rem;
  padding: 8rem 2rem 1rem;

  img {
    transition: all 1s;
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.2rem;
  }

  .description {
    text-align: center;
    min-height: 50px;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:hover {
    img {
      transform: scale(1.1) rotate(-90deg);
    }
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const Tag = styled.span`
  font-size: 10px;
  border-radius: 30px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.3rem 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
`

export const PriceAndIncrementContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .increment_and_button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`

export const Price = styled.p`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-text']};

  &::before {
    content: 'R$ ';
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`

export const AddToCartButton = styled.button`
  width: 2rem;
  height: 2rem;

  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['purple-dark']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
