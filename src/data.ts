import { v4 as uuidv4 } from 'uuid'
import expressoAmericano from './assets/images/Type=Americano.png'
import cafeGelado from './assets/images/Type=Café Gelado.png'
import cafeComLeite from './assets/images/Type=Café com Leite.png'
import capuccino from './assets/images/Type=Capuccino.png'
import chocolateQuente from './assets/images/Type=Chocolate Quente.png'
import cubano from './assets/images/Type=Cubano.png'
import expressoCremoso from './assets/images/Type=Expresso Cremoso.png'
import expressoTradicional from './assets/images/Type=Expresso.png'
import havaiano from './assets/images/Type=Havaiano.png'
import irlandes from './assets/images/Type=Irlandês.png'
import latte from './assets/images/Type=Latte.png'
import macchiato from './assets/images/Type=Macchiato.png'
import mochaccino from './assets/images/Type=Mochaccino.png'
import arabe from './assets/images/Type=Árabe.png'

export interface Coffee {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  quantity: number
  price: number
}

export const coffees: Coffee[] = [
  {
    id: uuidv4(),
    image: expressoTradicional,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: expressoAmericano,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: expressoCremoso,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: cafeGelado,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: capuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: havaiano,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: arabe,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: irlandes,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 1,
  },
]
