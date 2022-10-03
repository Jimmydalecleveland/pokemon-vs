export default function VS({ data }) {
  if (data.length === 0) {
    return (
      <main>
        <h1>Two valid pokemon are required in the url</h1>
        <h2>Example: /compare/bulbasaur-vs-mew</h2>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Compare pokemon</h1>
      <h2>Update the url with valid pokemon names to compare</h2>
      <div style={{ display: 'flex', gap: "2rem", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ textTransform: "capitalize" }}>{data[0].name}</h3>
          <h4>Abilities</h4>
          <ul>
            {data[0].abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>

          <h4>Moves</h4>
          <ul>
            {data[0].moves.map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ textTransform: "capitalize" }}>{data[1].name}</h3>
          <h4>Abilities</h4>
          <ul>
            {data[1].abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>

          <h4>Moves</h4>
          <ul>
            {data[1].moves.map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const pokemonToBeFetched = context.params.slug.split("-vs-")
  const firstPokemon = pokemonToBeFetched[0]
  const secondPokemon = pokemonToBeFetched[1]

  // Fetch data from external API
  const firstResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${firstPokemon}`)
    .then((res) => res.json())
    .catch(err => console.log(err))

  const secondResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${secondPokemon}`)
    .then((res) => res.json())
    .catch(err => console.log(err))

  const data = firstResult && secondResult ? [firstResult, secondResult] : []

  // Pass data to the page via props
  return { props: { data } }
}
