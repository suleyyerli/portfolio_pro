"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  HomeIcon,
  PenSquare,
  User2,
  Mail,
  ShoppingCart,
  BookOpen,
} from "lucide-react";

export default function Header() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Card className="flex items-center gap-2 px-4 py-3 bg-[#212121BD]/40 backdrop-blur-xl border-none rounded-full">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#f4a261]"
        >
          <HomeIcon size={24} />
        </Link>

        <Link
          href="/projets"
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#8caaee] hover:text-white"
        >
          <PenSquare size={24} />
        </Link>

        <Link
          href="/veilletechno"
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#a6d189] hover:text-white"
        >
          <BookOpen size={24} />
        </Link>

        <Link
          href="/apropos"
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#ca9ee6] hover:text-white"
        >
          <User2 size={24} />
        </Link>

        <Link
          href="/contact"
          className="p-2 rounded-full hover:bg-white/10 transition-colors text-[#F38BA8] hover:text-white"
        >
          <Mail size={24} />
        </Link>
      </Card>
    </div>
  );
}
