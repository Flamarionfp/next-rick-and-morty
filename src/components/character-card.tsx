import { Character } from "@/types/character";
import Image from "next/image";
import { Inter } from "next/font/google";
import { VscCircleFilled } from "react-icons/vsc";

const inter = Inter({ subsets: ["latin"] });

export function CharacterCard({
  name,
  image,
  status,
  species,
  location,
  origin,
}: Character) {
  function getStatusIconColor() {
    switch (status) {
      case "Alive":
        return "green";
      case "Dead":
        return "red";
      default:
        return "";
    }
  }

  return (
    <div className="flex bg-[#3C3E44] min-w-[500px] drop-shadow-lg rounded-md">
      <Image
        className="rounded-md rounded-r-none"
        src={image}
        alt={`Picture of ${name}}`}
        width={200}
        height={200}
      />
      <div className="p-4">
        <h2 className={`${inter.className} font-extrabold text-lg mb-1`}>
          {name}
        </h2>

        <div className="flex items-center gap-1 ml-[-6px]">
          <VscCircleFilled size={20} color={getStatusIconColor()} />
          <h3
            className={`${inter.className} font-bold text-sm`}
          >{`${status} - ${species}`}</h3>
        </div>

        <div className="my-3">
          <span className="text-gray-300">Last known location:</span>
          <p>{location.name}</p>
        </div>

        <div className="my-3">
          <span className="text-gray-300">First seen in:</span>
          <p>{origin.name}</p>
        </div>
      </div>
    </div>
  );
}
