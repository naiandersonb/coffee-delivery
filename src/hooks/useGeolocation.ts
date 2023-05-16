import { useEffect, useState } from 'react'
import { STATES } from '../states'

const getStateByName = (uf: string) => {
  const currentState = STATES.find(
    (state) => `BR-${state.sigla}`.toLowerCase() === uf.toLowerCase(),
  )

  if (currentState) {
    return currentState
  }

  return null
}

interface GeoLocation {
  uf: string
  city: string
}

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<
    GeoLocation | undefined
  >(undefined)

  async function appendLocation(latitude: number, longitude: number) {
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((res) => {
        const ufState = res?.principalSubdivisionCode
        const state = getStateByName(ufState)

        if (state) {
          setCurrentLocation({
            city: res?.city,
            uf: state.sigla.toUpperCase(),
          })
        }
      })
      .catch((err) => console.log({ err }))
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (location) {
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        appendLocation(latitude, longitude)
      })
    }
  }, [])

  return { currentLocation }
}
