import { CharacterCard } from "@/components/character-card";
import { CharacterResponse } from "@/types/character";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Characters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data: CharacterResponse = await response.json();

  return (
    <main className="grid place-items-center p-[5%]">
      <h1 className={`${inter.className} font-bold text-3xl my-10 lg:mt-0`}>
        Personagens
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {data.results.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>
    </main>
  );
}
