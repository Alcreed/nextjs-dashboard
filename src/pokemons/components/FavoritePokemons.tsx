'use client'

import { useAppSelector } from "@/store"

import { PokemonGrid } from "./PokemonGrid"

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
  
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos<small className="text-blue-500">Global state</small></span>
      
      <PokemonGrid pokemons={favoritePokemons} />
    </div>
  )
}
