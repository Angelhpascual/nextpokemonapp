import { Layout } from "../components/Layout"
import { Pokemon } from "../components/Pokemon"

export default function Home({ pokemonInitial }) {
  console.log(pokemonInitial)
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
        {pokemonInitial.results.map((monster, index) => (
          <Pokemon pokemon={monster} index={index} key={index} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemonInitial = await response.json()
  return {
    props: {
      pokemonInitial,
    },
  }
}
