import { useState } from "react";

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!isOpen) return null;

  return <div></div>;
};

export default UploadModal;
