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
  };

  return <div></div>;
};

export default CreateAlbumModal;
