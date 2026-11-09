import { FolderPlusIcon, XIcon } from "lucide-react";
import { useState } from "react";

const CreateAlbumModal = ({
  isOpen,
  onClose,
  onAlbumCreated,
  initialPhotoIds,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box-md">
        <div className="modal-header">
          <div className="flex items-center">
            <FolderPlusIcon className="size-5 text-red-600 mx-3" />
            <h3 className="font-medium text-slate-700 text-base">New Album</h3>
          </div>
          <button>
            <XIcon className="size-5 text-slate-400 hover:text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAlbumModal;
