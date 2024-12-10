import { ArrowRight } from "lucide-react";

const asciiArt = `
    |\\__/,|   (\`\\ 
  _.|o o  |_   ) )
-(((---(((--------

`;

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-16 text-[#c6d0f5] font-pixelify">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-2">SULEYMAN</h1>
        <pre
          className="font-bold"
          dangerouslySetInnerHTML={{ __html: asciiArt }}
        ></pre>
        <ul className="text-xl space-y-4">
          <li>
            <span className="text-[#f38ba8]">/</span> Etudiant{" "}
            <span className="text-[#a6e3a1]">BTS SIO</span>
          </li>
          <li>
            <span className="text-[#f38ba8]">/</span> Développeur{" "}
            <span className="text-[#a6e3a1]">FULL-STACK</span>
          </li>
          <li>
            <span className="text-[#f38ba8]">/</span> Développeur{" "}
            <span className="text-[#a6e3a1]">ERP</span>
          </li>
          {/* Telecharger mon CV*/}
          <li>
            <a href="/cv.pdf" download>
              <span className="text-[#f38ba8]">/</span> Télécharger mon{" "}
              <span className="text-[#a6e3a1]">
                CV{" "}
                <ArrowRight className="w-4 h-4 inline-block ml-2 font-bold" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
