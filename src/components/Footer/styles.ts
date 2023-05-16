import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;

  border-top: 1px solid ${(props) => props.theme['base-hover']};

  p {
    color: ${(props) => props.theme['base-label']};
  }

  a {
    color: ${(props) => props.theme.purple};
    text-decoration: none;
    font-weight: bold;
  }
`
