import React, { useState, useRef } from 'react';
import '../../css/main.css';

const ImageInput = () => {
  const defaultPreview = 'https://i.seadn.io/gcs/files/604f2f15168dc287b41a9c8687f0e11c.png?auto=format&dpr=1&h=500'; // Set default preview image path
  const [imagePreview, setImagePreview] = useState(defaultPreview); // Initialize with default preview
  const [imageUploaded, setImageUploaded] = useState(false); // Track whether an image is uploaded or not
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageUploaded(true); // Set imageUploaded to true when an image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreviewClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="image-input-container  ">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input"
        ref={fileInputRef}
      />
      <div className="image-preview image-upload-preview" onClick={handlePreviewClick}>
        <img src={imagePreview} alt="Preview" />
        <div className={`preview-text ${imageUploaded ? 'hidden' : ''}`}>Upload NFT</div>
      </div>
    </div>
  );
};

export default ImageInput;
