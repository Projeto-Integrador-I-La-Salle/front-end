import { useState } from "react";

export function ServicesCard({ title, description, fullDescription }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={toggleOpen}
      className="p-4 bg-gray-100 rounded-lg shadow hover:bg-red-500 group hover:shadow-2xl cursor-pointer"
    >
      <h3 className="text-xl font-medium group-hover:text-white">{title}</h3>
      <p className="mt-2 text-gray-500 group-hover:text-white">
        {isOpen ? fullDescription : description}
      </p>
      <span className=" group-hover:text-white">
        {" "}
        {isOpen ? "" : "Click para ver mais"}
      </span>
    </div>
  );
}
