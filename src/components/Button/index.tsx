import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  icon: ReactNode
  children: ReactNode
  handleClick?: () => void | Promise<void>
  isSelected?: boolean
}

export function Button({
  icon,
  handleClick,
  children,
  isSelected = false,
}: ButtonProps) {
  return (
    <ButtonContainer
      isSelected={isSelected}
      onClick={handleClick}
      type="button"
    >
      <span>{icon}</span>
      {children}
    </ButtonContainer>
  )
}
