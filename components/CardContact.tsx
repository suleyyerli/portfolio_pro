import React from "react";
import { Card } from "./ui/card";
import { DownloadCloud } from "lucide-react";
const CardContact: React.FC = () => {
  return (
    <Card className=" max-w-xl style-card">
      <div className="p-4">
        <ul className="text-xl space-y-4">
          <li>
            <span className="text-text">
              {" "}
              - Adresse mail : suley.yerli@gmail.com
            </span>
          </li>
          <li>
            <a href="/cv.pdf" download>
              <span className="text-text"> - Télécharger mon CV </span>
              <span>
                <DownloadCloud className="text-[#4DA7ED] inline-block ml-2" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default CardContact;
