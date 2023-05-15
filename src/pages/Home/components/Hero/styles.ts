import { styled } from 'styled-components'
import backgroundImage from '../../../../assets/images/Background.png'

export const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 5rem 1rem;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1126px;
  margin: 0 auto;

  .content h1 {
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  .content > p {
    margin-top: 0.6rem;
    max-width: 90%;
    font-size: 1.2em;
    line-height: 130%;
  }

  @media (max-width: 990px) {
    flex-direction: column-reverse;

    .content h1 {
      font-size: 2rem;
    }

    .content p {
      font-size: 1rem;
    }
    img {
      max-width: 80%;
    }
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`
interface BenefitsProps {
  bg: string
}

export const Benefits = styled.div<BenefitsProps>`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
  gap: 1rem;

  @media (max-width: 990px) {
    padding: 0.4rem 0;
  }

  span {
    background-color: ${(props) => props.bg};
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
  p {
    font-size: 0.875rem;
  }
`
