import { coffees } from '../../../../data'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, Grid } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <Grid>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Grid>
    </CoffeeListContainer>
  )
}
