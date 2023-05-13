import { useFormContext } from 'react-hook-form'
import { FormContentContainer, Input } from './styles'

export function FormContent() {
  const { register, watch } = useFormContext()

  const complement = watch('complement')

  return (
    <FormContentContainer>
      <Input
        type="text"
        placeholder="CEP"
        maxWidth="33%"
        {...register('zipCode')}
      />
      <Input type="text" placeholder="Rua" {...register} />
      <div className="number-and-complement">
        <Input
          type="text"
          placeholder="Número"
          maxWidth="33%"
          {...register('houseNumber')}
        />

        <div className="flag">
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          {!complement && <i>Opcional</i>}
        </div>
      </div>
      <div className="district-city-UF">
        <Input type="text" placeholder="Bairro" {...register('district')} />
        <Input type="text" placeholder="Cidade" {...register('city')} />
        <Input
          type="text"
          placeholder="UF"
          maxWidth="15%"
          {...register('uf')}
        />
      </div>
    </FormContentContainer>
  )
}
