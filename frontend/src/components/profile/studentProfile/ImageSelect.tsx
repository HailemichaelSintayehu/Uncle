import React, { useState } from 'react';

interface ImageSelectProps {
  onImageSelect: (file: File | null) => void;
  className:string;
}

const ImageSelect: React.FC<ImageSelectProps> = ({ onImageSelect,className }) => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    } else {
      setSelectedImage(null);
      onImageSelect(null);
    }
  };

  return (
    <div className={"imageSelectContainer"}>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className={"fileInput"}
      />
      {selectedImage && (
        <div className={className}>
          <img src={selectedImage as string} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageSelect;
