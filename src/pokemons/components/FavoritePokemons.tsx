'use client'

import { useState } from "react"
import { useAppSelector } from "@/store"
import { IoHeartOutline } from "react-icons/io5"

import { PokemonGrid } from "./PokemonGrid"

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
  const [pokemons, setPokemons] = useState(favoritePokemons);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos<small className="text-blue-500">Global state</small></span>
      
      {/* <PokemonGrid pokemons={favoritePokemons} /> */}
      {
        pokemons.length > 0
        ? <PokemonGrid pokemons={pokemons} />
        : <NoFavorites />
      }
    </div>
  )
}

const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}
