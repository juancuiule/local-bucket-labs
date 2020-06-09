export type LocationObject = {
  coordenadas?: {
    latitud: number
    longitud: number
    accuracy: number
    timestamp: number
  }
  localidad_geo?: string
  provincia_geo?: string
  codigo_postal_geo?: string
  pais_geo?: string
}

export function geoFindMe(
  cb: (err: PositionError | null, data?: LocationObject) => any
) {
  async function success(position: Position) {
    const {
      coords: { latitude, longitude, accuracy },
      timestamp,
    } = position

    const coordenadas = {
      latitud: latitude,
      longitud: longitude,
      accuracy,
      timestamp,
    }

    await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=geojson`
    )
      .then(res => res.json())
      .then(featureCollection => {
        const data = featureCollection.features[0]
        const address = data.properties.address
        const location = {
          coordenadas,
          localidad_geo: address.town,
          provincia_geo: address.state,
          codigo_postal_geo: address.postcode,
          pais_geo: address.country,
        }
        cb(null, location)
      })
      .catch(error => {
        cb(null, { coordenadas })
      })
  }

  function error(err: PositionError) {
    // console.log("Unable to retrieve your location");
    cb(err)
  }

  if (!navigator.geolocation) {
    // console.log("Geolocation is not supported by your browser");
    cb({
      message: 'Geolocation is not supported by your browser',
      PERMISSION_DENIED: 0,
      POSITION_UNAVAILABLE: 1,
      TIMEOUT: 0,
      code: 0,
    })
  } else {
    // console.log("Locating…");
    navigator.geolocation.getCurrentPosition(success, error)
  }
}
