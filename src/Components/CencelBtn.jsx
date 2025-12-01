import { useState } from "react";
import { ImCross } from "react-icons/im";

const CencelBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
      >
        <ImCross />
      </button>
    </div>
  );
};

export default CencelBtn;
