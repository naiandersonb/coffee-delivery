import { Button, ButtonContainer } from './styles'

interface IncrementAndDecrementButtonProps {
  handleIncrement: () => void
  handleDecrement: () => void
  count: number
}
export function IncrementAndDecrementButton({
  count,
  handleDecrement,
  handleIncrement,
}: IncrementAndDecrementButtonProps) {
  return (
    <ButtonContainer>
      <Button onClick={handleDecrement} type="button">
        -
      </Button>
      <div>{count}</div>
      <Button onClick={handleIncrement} type="button">
        +
      </Button>
    </ButtonContainer>
  )
}
