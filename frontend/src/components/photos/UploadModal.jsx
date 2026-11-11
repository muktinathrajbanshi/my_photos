import { useRef, useState } from "react";

import { X } from "lucide-react";

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleUpload = async () => {
    console.log(selectedFiles);
  };

  const handleClose = () => {
    previews.forEach((p) => URL.revokeObjectURL(p.url));
    setSelectedFiles([]);
    setPreviews([]);
    setUploading(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box-lg">
        {/* Header  */}
        <div className="modal-header">
          <div>
            <h2 className="text-lg font-medium text-slate-800">
              Upload to My Library
            </h2>
            <p className="text-xs text-slate-500">
              Upload and organize your photos & videos
            </p>
          </div>
          <button
            onClick={handleClose}
            disabled={uploading}
            className="p-2 hover:bg-slate-100 text-slate-400
          hover:text-slate-600 rounded-full transition cursor-pointer"
          >
            <X classNames="size-5" />
          </button>
        </div>

        {/* Content  */}

        <div className="p-6 overflow-y-auto space-y-4">
          {/* Drag and Drop Box  */}
          <div>
            <h3 className="font-medium text-slate-800 text-sm capitalize">
              Drag & Drop <span className="text-red-600">photos & videos</span>{" "}
              here, or Browse
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Supports PNG, JPG, WEBP, GIF, MP4, WEBM (up to 100MB each)
            </p>
            <input type="file" className="hidden" ref={fileInputRef} />
          </div>

          {/* Preview Grid  */}
        </div>

        {/* Footer  */}
        <div></div>
      </div>
    </div>
  );
};

export default UploadModal;
