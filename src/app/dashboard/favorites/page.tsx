import { Metadata } from "next";

import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de pokemons favoritos',
};

export default async function PokemonsPage() {
  return (
    <FavoritePokemons />
  );
}