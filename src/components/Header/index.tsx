import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/images/coffee-logo.svg'
import { useOrdersContext } from '../../contexts/OrdersContext'
import {
  Box,
  HeaderContainer,
  HeaderItems,
  LocationBadge,
  ShoppingCartButton,
  Total,
} from './styles'

export function Header() {
  const { totalOrders } = useOrdersContext()

  return (
    <Box>
      <HeaderContainer>
        <NavLink to="/" title="homepage">
          <img src={logoCoffeeDelivery} alt="coffee delivery logotipo" />
        </NavLink>

        <HeaderItems>
          <LocationBadge>
            <MapPin size={20} weight="fill" />
            Caxias, MA
          </LocationBadge>

          <NavLink to="/checkout" title="Checkout">
            <ShoppingCartButton type="button">
              <ShoppingCartSimple size={20} weight="fill" />
              {totalOrders > 0 && <Total>{totalOrders}</Total>}
            </ShoppingCartButton>
          </NavLink>
        </HeaderItems>
      </HeaderContainer>
    </Box>
  )
}
