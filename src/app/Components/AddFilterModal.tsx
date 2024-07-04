import React from "react";

interface AddFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: string) => void;
}

const AddFilterModal: React.FC<AddFilterModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg mb-4">Select Filter</h2>
        <ul>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => onSelect(option)}
              className="cursor-pointer p-2 hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default AddFilterModal;
