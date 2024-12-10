"use client";

import CardVeille from "@/components/CardVeille";
import { useRouter } from "next/navigation";

// Veille Technologique
const veilleTechno = [
  { id: 1, title: "Comment j'effectue ma veille technologique" },
  { id: 2, title: "Veille 1 : Chaîne Youtube Micode / underscore" },
  { id: 3, title: "Veille 2 : Chaîne Youtube Micode / underscore" },
  { id: 4, title: "Veille 3 : Chaîne Youtube Micode / underscore" },
];

export default function VeilleTechno() {
  const router = useRouter();
  const handleCardClick = (id: number) => {
    router.push(`/veilletechno/${id}`);
  };
  return (
    <div>
      {/* Titre */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-title">Veille Technologique</h1>
      </div>
      {/* Cartes */}
      <div className="flex flex-col items-center mt-10 gap-4">
        {veilleTechno.map((veille) => (
          <CardVeille
            key={veille.id}
            title={veille.title}
            id={veille.id}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}
