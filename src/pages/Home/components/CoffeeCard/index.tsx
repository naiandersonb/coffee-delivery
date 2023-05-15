import { ShoppingCartSimple } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast'
import { IncrementAndDecrementButton } from '../../../../components/IncrementAndDecrementButton'
import { useOrdersContext } from '../../../../contexts/OrdersContext'
import { Coffee } from '../../../../data'
import { useCounter } from '../../../../hooks/useCounter'
import { formatCurrency } from '../../../../utils/formatCurrency'

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

  const notify = () =>
    toast.success(`${coffee.name} adicionado ao carrinho`, {
      duration: 4000,
      icon: '🍵',
    })

  const { count, handleDecrement, handleIncrement, resetCounter } = useCounter()

  const price = formatCurrency(coffee.price)

  function handleAddNewItem() {
    notify()
    addNewItem(coffee, count)
    resetCounter()
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
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            boxShadow: 'none',
            border: '1px solid #88888897',
          },
        }}
      />
    </CoffeeCardContainer>
  )
}
