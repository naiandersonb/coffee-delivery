import { ReactNode } from 'react'
import { styled } from 'styled-components'

export const FormHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .map-pin-icon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .payment-icon {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

interface FormHeaderProps {
  children: ReactNode
  title: string
  subtitle: string
}
export function FormHeader({ children, subtitle, title }: FormHeaderProps) {
  return (
    <FormHeaderContainer>
      {children}
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </FormHeaderContainer>
  )
}
