"use client"
import React, { useState } from "react";
import ImageSelectionModal from "./ImageSelectionModal";

interface TableCellProps {
  variant: {
    id: string;
    url?: string; // Make url optional since it may not always exist
    width: number | null;
    size: number | null;
  } ;
  stateIndex: number;
  variantIndex: number;
  handleFileChange: (
    stateIndex: number,
    variantIndex: number,
    file: File
  ) => void; // Adjusted to accept a File object directly
}

const TableCell: React.FC<TableCellProps> = ({
  variant,
  stateIndex,
  variantIndex,
  handleFileChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    "/images/photo1.png",
    "/images/photo2.jpeg",
    "/images/photo3.png",
    "/images/photo4.jpeg",
  ];

  const handleSelect = (url: string) => {
    // Create a fake File object for demonstration
    const file = new File([url], `design_${variantIndex + 1}.png`, {
      type: "image/png",
    });
    handleFileChange(stateIndex, variantIndex, file);
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
            onChange={(event) =>
              handleFileChange(
                stateIndex,
                variantIndex,
                event.target.files![0] // Access the selected File object directly
              )
            }
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
