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

  return <div></div>;
};

export default CreateAlbumModal;
