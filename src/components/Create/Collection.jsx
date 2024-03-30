import React, { useRef, useState } from "react";

const Collection = () => {
  const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file

    // Validate for image type and size (optional)
    if (!file || !/\.(jpg|jpeg|png)$/.test(file.name)) {
      alert("Please select a valid image file (jpg, jpeg, or png)");
      return;
    }

    if (file.size > 1024 * 1024 * 5) {
      // Max 5 MB (adjust as needed)
      alert("Image size cannot exceed 5MB");
      return;
    }

    setImageFile(file);
  };

  return (
    <React.Fragment>
      <div className="black_bg pt-[11vh] container_box create_collection">
        <h1>Create Collection</h1>
        <div className="create_collection__preview">
          <div className="file-input-wrapper">
            <h2>Logo image</h2>
            <label
              htmlFor="file-input"
              className="file-input-button w-full h-[30vh] flex justify-center items-center"
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded Image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>
                  Upload File
                  <svg /* Your existing SVG for upload icon */ />
                </span>
              )}
            </label>
            <input
              id="file-input"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="file-input"
              onChange={handleChange}
              ref={inputRef}
              // Remove multiple attribute (if present)
            />
          </div>

          <div className="file-input-wrapper">
            <h2>Cover Image</h2>
            <label
              htmlFor="file-input"
              className="file-input-button w-full h-[30vh] flex justify-center items-center"
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded Image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>
                  Upload File
                  <svg /* Your existing SVG for upload icon */ />
                </span>
              )}
            </label>
            <input
              id="file-input"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="file-input"
              onChange={handleChange}
              ref={inputRef}
              // Remove multiple attribute (if present)
            />
          </div>
          <div className="file-input-wrapper">
            <h2>Featured image</h2>
            <label
              htmlFor="file-input"
              className="file-input-button w-full h-[30vh] flex justify-center items-center"
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded Image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>
                  Upload File
                  <svg /* Your existing SVG for upload icon */ />
                </span>
              )}
            </label>
            <input
              id="file-input"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="file-input"
              onChange={handleChange}
              ref={inputRef}
              // Remove multiple attribute (if present)
            />
          </div>
        </div>
        <div className="create_collection__form"></div>
      </div>
    </React.Fragment>
  );
};

export default Collection;
