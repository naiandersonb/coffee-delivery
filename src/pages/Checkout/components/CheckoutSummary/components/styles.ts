import { styled } from 'styled-components'

export const SummaryContainer = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;

  @media (max-width: 1072px) {
    padding: 1.2rem;
  }
`

export const CurrencyDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 2rem;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
