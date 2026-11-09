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
          <button className="p-1.5 cursor-pointer" onClick={handleClose}>
            <XIcon className="size-5 text-slate-400 hover:text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 tracking-wider mb-1.5">
              Album Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Summer Vacation 2026"
              autoFocus
              required
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 tracking-wider mb-1.5">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAlbumModal;
