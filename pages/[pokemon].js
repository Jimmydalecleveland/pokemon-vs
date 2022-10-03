export default function Pokemon({ pokemon }) {
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
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()

  // Pass pokemon to the page via props
  return { props: { pokemon } }
}
