import React, { useState } from "react";
import { Reorder } from "framer-motion";
import TableCell from "./TableCell";
import AddFilterModal from "./AddFilterModal";
import { useTableContext } from "../context/TableContext";

interface TableRowProps {
  stateIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ stateIndex }) => {
  const { data, deleteState, handleFileChange } = useTableContext();
  const item = data[stateIndex];
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilterSelect = (option: string) => {
    // handle filter select logic here
    setIsFilterModalOpen(false);
  };

  return (
    <Reorder.Item as="tr" value={item} className="bg-white shadow rounded p-4 my-2">
      <td className="p-2 border text-center" style={{ width: "80px" }}>
        <div className="flex justify-center items-center space-x-2">
          <button onClick={() => deleteState(item.id)} className="bg-white-700 text-white px-2 py-1 rounded">
            <img src="/images/delete.png" alt="delete" width="20" />
          </button>
        </div>
      </td>
      <td className="p-2 border text-center" style={{ width: "40px" }}>{stateIndex + 1}</td>
      <td className="p-2 border text-center relative" style={{ width: "120px" }}>
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="bg-gray-200 text-black px-3 py-2 rounded text-sm"
        >
          + Add Filters
        </button>
        <AddFilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          onSelect={handleFilterSelect}
        />
      </td>
      
      
      {item.variants.map((variant, idx) => (
        <TableCell
          key={variant.id}
          //@ts-ignore
          variant={variant}
          stateIndex={stateIndex}
          variantIndex={idx}
          handleFileChange={handleFileChange}
        />
      ))}
    </Reorder.Item>
  );
};

export default TableRow;
