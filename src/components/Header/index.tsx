import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/images/coffee-logo.svg'
import { useOrdersContext } from '../../contexts/OrdersContext'
import { useGeolocation } from '../../hooks/useGeolocation'
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
  const { currentLocation } = useGeolocation()

  return (
    <Box>
      <HeaderContainer>
        <NavLink to="/" title="homepage">
          <img src={logoCoffeeDelivery} alt="coffee delivery logotipo" />
        </NavLink>

        <HeaderItems>
          {currentLocation && (
            <LocationBadge>
              <MapPin size={20} weight="fill" />
              {currentLocation.city}, {currentLocation.uf}
            </LocationBadge>
          )}

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
