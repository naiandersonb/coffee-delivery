import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import imageCoffeeHero from '../../../../assets/images/Image-hero.png'
import {
  Benefits,
  BenefitsContainer,
  HeroContainer,
  HeroContent,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <div className="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BenefitsContainer>
            <Benefits bg="#C47F17">
              <span>
                <ShoppingCartSimple size={20} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </Benefits>

            <Benefits bg="#574F4D">
              <span>
                <Package size={20} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Benefits>

            <Benefits bg="#DBAC2C">
              <span>
                <Timer size={20} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Benefits>

            <Benefits bg="#8047F8">
              <span>
                <Coffee size={20} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Benefits>
          </BenefitsContainer>
        </div>
        <img
          src={imageCoffeeHero}
          alt="copo de café com grãos de café ao redor e fundo amarelo"
        />
      </HeroContent>
    </HeroContainer>
  )
}
