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
    font-family: 'Baloo 2', cursive;
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
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
`
interface BenefitsProps {
  bg: string
}

export const Benefits = styled.div<BenefitsProps>`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.bg};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
`
