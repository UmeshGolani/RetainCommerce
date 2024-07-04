import React from "react";

interface ImageSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
  images: string[];
}

const ImageSelectionModal: React.FC<ImageSelectionModalProps> = ({ isOpen, onClose, onSelect, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-lg mb-4">Select Image</h2>
        <div className="grid grid-cols-4 gap-4">
          {images.map((url) => (
            <img
              key={url}
              src={url}
              alt="select"
              className="cursor-pointer border p-1"
              onClick={() => onSelect(url)}
            />
          ))}
        </div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default ImageSelectionModal;
