import React, { useState } from "react";


const FilePreview = ({ file }) => {
 
        const [previewUrl, setPreviewUrl] = useState('');
      
        React.useEffect(() => {
          if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
      
            // Cleanup URL object when the component unmounts
            return () => {
              URL.revokeObjectURL(url);
            };
          }
        }, [file]);
      
        if (!previewUrl) {
          return null;
        }
      
        const fileType = file?.type || '';
        let fileIcon;
     
      
        return (
          <div className="file-preview">
          
          
            <div className="file-preview-content">
              {fileType.startsWith('image') && (
                <img src={previewUrl} alt="file-preview" />
              )}
              {(fileType.startsWith('audio') || fileType.startsWith('video')) && (
                <video controls>
                  <source src={previewUrl} />
                </video>
              )}
            </div>
          </div>
        );
      };  
  export default FilePreview;