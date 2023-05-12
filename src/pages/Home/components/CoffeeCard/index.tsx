import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { useOrdersContext } from '../../../../contexts/OrdersContext'
import { Coffee } from '../../../../data'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { IncrementAndDecrementButton } from './IncrementAndDecrementButton'
import {
  AddToCartButton,
  CoffeeCardContainer,
  Price,
  PriceAndIncrementContainer,
  Tag,
  TagsContainer,
} from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addNewItem } = useOrdersContext()

  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount((state) => state + 1)
  }
  const handleDecrement = () => {
    if (count === 1) return
    setCount((state) => state - 1)
  }

  const price = formatCurrency(coffee.price)

  function handleAddNewItem() {
    addNewItem(coffee, count)
    setCount(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.name} />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>

      <h3>{coffee.name}</h3>
      <p className="description">{coffee.description}</p>

      <PriceAndIncrementContainer>
        <Price>{price}</Price>
        <div className="increment_and_button">
          <IncrementAndDecrementButton
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            count={count}
          />
          <AddToCartButton type="button" onClick={handleAddNewItem}>
            <ShoppingCartSimple size={20} weight="fill" />
          </AddToCartButton>
        </div>
      </PriceAndIncrementContainer>
    </CoffeeCardContainer>
  )
}
