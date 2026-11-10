import { useRef, useState } from "react";

import { X } from "lucide-react";

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
            <p>Upload and organize your photos & videos</p>
          </div>
          <button onClick={handleClose}>
            <X classNames="size-5" />
          </button>
        </div>

        {/* Content  */}
      </div>
    </div>
  );
};

export default UploadModal;
