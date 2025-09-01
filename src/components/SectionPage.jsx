import { HomeIcon, ChevronRightIcon } from "lucide-react";

function SectionPage({p}) {
  return (
    <section className="bg-[#1D1616] h-24 flex gap-2 items-center text-gray-400 px-[10%]">
      <HomeIcon />
      <ChevronRightIcon />
      <p className="text-red-500">{p}</p>
    </section>
  );
}
export { SectionPage };
