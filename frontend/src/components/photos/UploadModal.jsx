import { useRef, useState } from "react";

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box-lg">
        {/* Header  */}
        <div className="modal-header">
          <div>
            <h2>Upload to My Library</h2>
          </div>
        </div>

        {/* Content  */}
      </div>
    </div>
  );
};

export default UploadModal;
