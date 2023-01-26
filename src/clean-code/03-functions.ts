;(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id })
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id })
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id })
  }

  interface Movie {
    title: string
    description: string
    rating: number
    cast: string[]
  }

  // Crear una película
  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ title, description, rating, cast })
  }

  function checkFullName(name: string) {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (name === 'fernando') return false

    return true
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    if (!checkFullName(fullName)) return false

    console.log('Crear actor', birthdate)
    return true
  }

  //! Messy
  const getPayAmountMessy = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result
    if (isDead) {
      result = 1500
    } else {
      if (isSeparated) {
        result = 2500
      } else {
        if (isRetired) {
          result = 3000
        } else {
          result = 4000
        }
      }
    }

    return result
  }

  //? Goodness
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500

    if (isSeparated) return 2500

    return isRetired ? 3000 : 4000
  }
})()
