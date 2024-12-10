"use client";
import { useRouter } from "next/navigation";
import CardProject from "@/components/CardProject";

// Projets
const projects = [
  {
    id: 1,
    title: "Projet : UPvote",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    tags: ["FRONTEND", "BACKEND"],
    image: "/projetphoto/projet2.png",
  },
  {
    id: 2,
    title: "Projet : Mobile",
    description:
      "Application full-stack, utilisant javascript, NextJS, React, SQLite, Prisma, TailwindCSS, ShadcnUI, Authjs",
    tags: ["FRONTEND", "BACKEND"],
    image: "/projetphoto/ProjetMobile.png",
  },

  {
    id: 3,
    title: "Projet : Entreprise",
    description:
      "Développement d'un formulaire (PSD) et d'un tableur dynamique(TDY)",
    tags: ["ERP", "DIAPASON"],
    image: "/projetphoto/ProjetDevise.png",
  },
  {
    id: 4,
    title: "Portfolio version 1",
    description:
      "Développement de mon premier portfolio, utilisant React, NextJS, TailwindCSS, ShadcnUI",
    tags: ["FRONTEND", "REACT/NEXTJS"],
    image: "/projetphoto/projet1.png",
  },
];

export default function Projets() {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/markdown/projet${id}`);
  };

  return (
    <div>
      {/* Titre */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-title">Projets</h1>
      </div>
      {/* Cartes */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <CardProject
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              onClick={() => handleCardClick(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
