import { styled } from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  max-width: 1126px;
  margin: 0 auto;
  min-height: 50vh;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;

    img {
      max-width: 80%;
    }
  }
`
export const DeliveryInfo = styled.div`
  width: 50%;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .subtitle {
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

export const DeliveryDetails = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background-color: #fff;

  span {
    color: ${(props) => props.theme.white};
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  &:before {
    content: '';
    position: absolute;
    padding: 1rem;
    top: -0.7%;
    right: -0.4%;
    left: -0.4%;
    bottom: -1%;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .map-icon {
    background-color: ${(props) => props.theme.purple};
  }
  .time-icon {
    background-color: ${(props) => props.theme.yellow};
  }
  .dollar-icon {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
