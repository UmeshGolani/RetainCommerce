import React from "react";
import { useTableContext } from "../context/TableContext";

const Header: React.FC = () => {
  const { variantHeaders, deleteVariant } = useTableContext();

  return (
    <thead>
      <tr className="bg-gray-100 sticky top-0">
        <th className="p-2 border" style={{ width: "100px" }}>Actions</th>
        <th className="p-2 border" style={{ width: "45px" }}>#</th>
        <th className="p-2 border" style={{ width: "170px" }}>Add Filters</th>
        {variantHeaders.map((header, idx) => (
          <th key={idx} className="p-2 border relative">
            {header}
            <button
              onClick={() => deleteVariant(idx)}
              className="text-red-500 ml-2 border rounded-full w-6 h-6 flex items-center justify-center absolute top-0 transform translate-x-1/2"
              style={{ right: "1.5rem", top: "0.5rem" }}
            >
              x
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
