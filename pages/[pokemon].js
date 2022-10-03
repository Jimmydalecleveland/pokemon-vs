export default function Pokemon({ pokemon }) {
  if (pokemon.error) {
    return (
      <main>
        <h1>{pokemon.error}</h1>
      </main>
    )
  }

  return (
    <main>
      <h1>{pokemon.name}</h1>
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>

      <h2>Moves</h2>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps({ params }) {

  // Fetch pokemon from external API
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
    .then((res) => res.json())
    .catch(err => console.log(err))

  const pokemon = data || {
    error: `No pokemon exists with the name ${params.pokemon}`,
  }

  // Pass pokemon to the page via props
  return { props: { pokemon } }
}
