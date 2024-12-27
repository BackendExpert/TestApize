import { useState } from 'react';

const CollectionForm = ({ onAddCollection }) => {
  const [collectionName, setCollectionName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (collectionName) {
      onAddCollection(collectionName);
      setCollectionName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Enter Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Collection
      </button>
    </form>
  );
};

export default CollectionForm;