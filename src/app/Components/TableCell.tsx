import React, { useState } from "react";
import ImageSelectionModal from "./ImageSelectionModal";

interface TableCellProps {
  variant: {
    id: string;
    url: string | null;
    width: number | null;
    size: number | null;
  };
  stateIndex: number;
  variantIndex: number;
  handleFileChange: (stateIndex: number, variantIndex: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableCell: React.FC<TableCellProps> = ({ variant, stateIndex, variantIndex, handleFileChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = ["/images/photo1.png", "/images/photo2.jpeg", "/images/photo3.png", "/images/photo4.jpeg"];

  //@ts-ignore
  const handleSelect = (url: string) => {
    const file = new File([new Blob()], "filename", { type: "image/jpeg" });
    handleFileChange(stateIndex, variantIndex, { target: { files: file[] } });
    setIsModalOpen(false);
};


  return (
    <td className="p-2 border text-center">
      {!variant.url ? (
        <>
          <button
            className="bg-gray-200 text-black border px-3 py-10 rounded text-xs font-light"
            onClick={() => setIsModalOpen(true)}
            style={{ width: "100px", height: "100px" }}
          >
            + Add Design
          </button>
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg, image/jpg"
            onChange={(event) => handleFileChange(stateIndex, variantIndex, event)}
          />
        </>
      ) : (
        <div className="flex justify-center items-center">
          <img
            src={variant.url}
            alt={`Design ${variantIndex + 1}`}
            className="mt-2"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      )}
      <ImageSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelect}
        images={images}
      />
    </td>
  );
};

export default TableCell;
