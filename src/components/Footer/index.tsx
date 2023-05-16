import { FooterContainer } from './styles'

const GITHUB = 'https://github.com/naiandersonb'

export function Footer() {
  return (
    <FooterContainer>
      <p>
        ⚡Projeto desenvolvido por{' '}
        <a href={GITHUB} target="_blank" rel="noreferrer">
          {' '}
          Naianderson Bruno
        </a>
      </p>
    </FooterContainer>
  )
}
