import Link from "next/link"

export default function Home({ data }) {
  return (
    <main>
      <h1>All pokemon</h1>
      <p>Total pokemon: {data.count}</p>
      <h2>Head to <Link href="/compare/bulbasaur-vs-mew"><a>`/compare/bulbasaur-vs-mew`</a></Link> to compare two Pokemon</h2>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/${pokemon.name}`}>
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
