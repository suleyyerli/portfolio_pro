import CardContact from "@/components/CardContact";

// Contact

export default function VeilleTechno() {
  return (
    <div>
      {/* Titre */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-title">Contactez-moi</h1>
      </div>
      {/* Cartes */}
      <div className="flex flex-col items-center mt-10 gap-4 p-4">
        <CardContact />
      </div>
    </div>
  );
}
