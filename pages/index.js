import Link from "next/link"

export default function Home({ data }) {
  return (
    <main>
      <h1>All pokemon</h1>
      <h2>Total pokemon: {data.count}</h2>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
