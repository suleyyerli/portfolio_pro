import React from "react";
import { Card } from "./ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface CardVeilleProps {
  title: string;
  id: number;
  onClick: (id: number) => void;
}

const CardVeille: React.FC<CardVeilleProps> = ({ title, id, onClick }) => {
  return (
    <Card
      className="cursor-pointer max-w-xl style-card"
      onClick={() => onClick(id)}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-title mt-30 ">
          <ArrowRightIcon className="w-4 h-4 justify-end text-title inline-block ml-2 font-bold" />{" "}
          {title}
        </h2>
      </div>
    </Card>
  );
};

export default CardVeille;
