import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideMapPin, LucideBriefcase, ArrowRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ReactIcon } from "@/icons/ReactIcon";
import { JavascriptIcon } from "@/icons/JavascriptIcon";
import { TailwindIcon } from "@/icons/TailwindIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { VscodeIcon } from "@/icons/VscodeIcon";
import { NextIcon } from "@/icons/NextIcon";
import { SpotifyIcon } from "@/icons/SpotifyIcon";
import { AppleIcon } from "@/icons/AppleIcon";
import { BraveIcon } from "@/icons/BraveIcon";
import { DockerIcon } from "@/icons/DockerIcon";
import { DiscordIcon } from "@/icons/DiscordIcon";

export default function Apropos() {
  return (
    // Conteneur
    <div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-title">A Propos</h1>
      </div>
      <div className="flex justify-center ">
        <div className="flex w-full">
          {/* Colonne gauche fixe */}
          <div className="w-3/5">
            <Card className="sticky mt-10 top-16 p-5 style-card">
              <img
                src="/autre/avatarfinal.png"
                alt="Profile"
                className="w-full h-auto rounded-xl"
              />
              <h2 className="text-2xl font-bold mb-2 text-title mt-10">
                Hey à nouveau 👋
              </h2>
              <p className="text-text">
                Vous allez en apprendre plus sur moi !
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="outline" className="style-badge">
                  STRASBOURG <LucideMapPin />
                </Badge>
                <Badge variant="outline" className="style-badge">
                  DEVELOPPEUR
                  <LucideBriefcase />
                </Badge>
              </div>
            </Card>
          </div>

          {/* Colonne droite défilante */}
          <div className="w-3/5 p-4 overflow-y-auto mt-10">
            <Card className=" mb-6 max-w-xl style-card">
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-title">
                  Informations supplémentaires
                </h2>
                <ul className="text-xl space-y-4 text-text">
                  <li>
                    <span className="">
                      {" "}
                      - Adresse mail : suley.yerli@gmail.com
                    </span>
                  </li>
                  <li>
                    <a href="https://github.com/suleyyerli" target="_blank">
                      <span>
                        - GitHub{" "}
                        <ArrowRightIcon className="w-4 h-4 inline-block ml-2 font-bold text-[#4DA7ED]" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/cv.pdf" download>
                      <span>
                        {" "}
                        - Télécharger mon CV{" "}
                        <ArrowRightIcon className="w-4 h-4 inline-block ml-2 font-bold text-[#4DA7ED]" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="style-card mb-6">
              <h2 className="text-xl font-bold mb-2 text-title">
                A propos de moi
              </h2>
              <div>
                <p className="text-text">
                  Salut, Je suis, étudiant en alternance en bts sio spécialisé
                  en
                </p>
                <Badge variant="outline" className="style-badge">
                  SLAM
                </Badge>
                <p className="text-text">
                  , passionné d&apos;informatique. Mon parcours m&apos;a permis
                  de combiner théorie et expérience professionnelle, avec des
                  projets concrets en entreprise, incluant le developpement
                  d&apos;outil pour faciliter le travail en usine, maîtrise et
                  développement sur{" "}
                </p>
                <Badge variant="outline" className="style-badge">
                  ERP
                </Badge>
                <p className="text-text">
                  . Je souhaite approfondir mes compétences, et obtenir mon BTS
                  pour poursuivre vers une license.
                </p>
              </div>
            </Card>
            <Card className="style-card mb-6">
              <h2 className="text-xl font-bold mb-6 text-title">
                Expérience professionnelle
              </h2>
              <div className="mb-4">
                <h3 className="font-semibold text-title">CLESTRA </h3>
                <p className="text-title">Développeur • 2023 - 2025</p>
                <p className="text-text">
                  J&apos;ai créé des expériences numériques centrées sur les
                  utilisateurs grâce à la recherche utilisateur, aux maquettes,
                  et à la collaboration avec des équipes interdisciplinaires...
                </p>
              </div>
              <Separator className="my-4" />
              <div>
                <h3 className="font-semibold text-title">
                  Plâtrerie Fladen Muller{" "}
                </h3>
                <p className="text-title">En CDI • 2020 - 2023</p>
                <p className="text-text">
                  J&apos;ai passé un CAP chez les compagnons du devoirs de
                  Nantes. Ceux qui ma permis d&apos;apprendre à gerer mon temps
                  à gerer une équipe et former un apprenti.
                </p>
              </div>
            </Card>

            <Card className="style-card mb-6">
              <h2 className="text-xl font-bold mb-6 text-title">Compétences</h2>
              <div className="grid grid-cols-3 gap-4 p-4">
                <div className="flex flex-col items-center">
                  <ReactIcon size={50} />

                  <Badge variant="outline" className="style-badge ">
                    React
                  </Badge>
                </div>
                <div className="flex flex-col items-center">
                  <TailwindIcon size={50} />

                  <Badge variant="outline" className="style-badge">
                    TailwindCSS
                  </Badge>
                </div>
                <div className="flex flex-col items-center">
                  <JavascriptIcon size={50} />

                  <Badge variant="outline" className="style-badge">
                    JavaScript
                  </Badge>
                </div>
                <div className="flex flex-col items-center">
                  <GithubIcon size={50} />
                  <Badge variant="outline" className="style-badge">
                    GitHub
                  </Badge>
                </div>

                <div className="flex flex-col items-center">
                  <NextIcon size={50} />
                  <Badge variant="outline" className="style-badge">
                    Next.js
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="style-card">
              <h2 className="text-xl font-bold text-title">
                Logiciels de choix
              </h2>
              <div className="flex justify-center">
                <div className="flex gap-2 p-4 ">
                  <Badge variant="outline" className="style-badge">
                    <SpotifyIcon size={40} />
                  </Badge>

                  <Badge variant="outline" className="style-badge">
                    <AppleIcon size={40} />
                  </Badge>

                  <Badge variant="outline" className="style-badge">
                    <BraveIcon size={40} />
                  </Badge>

                  <Badge variant="outline" className="style-badge">
                    <DockerIcon size={40} />
                  </Badge>

                  <Badge variant="outline" className="style-badge">
                    <DiscordIcon size={40} />
                  </Badge>
                  <Badge variant="outline" className="style-badge">
                    <VscodeIcon size={40} />
                  </Badge>
                  {/* Ajoutez d'autres icônes SVG ici */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
