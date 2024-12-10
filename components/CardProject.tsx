import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface CardProjectProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  onClick: () => void;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  tags,
  image,
  onClick,
}) => {
  return (
    <Card className="cursor-pointer style-card" onClick={onClick}>
      <div>
        <img
          src={image}
          alt="Profile"
          className="rounded-xl mb-4 h-[500px] object-cover"
        />
        <h2 className="text-xl font-bold text-title">{title}</h2>
        <p className="text-text">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className=" style-badge mt-2">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardProject;
