import Image from "next/image"

export function Pokemon(monster, index) {
  const pokemonIndex = ("000" + (monster.index + 1)).slice(-3)
  console.log(pokemonIndex)

  return (
    <div className="bg-slate-900 rounded-md p-5 flex justify-center items-center flex-col relative">
      <span className="z-10 absolute text-5xl text-slate-500 top-0 right-3 font-bold">
        #{pokemonIndex}
      </span>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
        width={150}
        height={150}
        alt="Pokemon Picture"
        className="z-10"
      />
      <span className="font-bold text-2xl text-amber-300 uppercase">
        {monster.pokemon.name}
      </span>
    </div>
  )
}
