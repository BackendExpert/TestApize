import { useState } from 'react';

const CollectionForm = ({ onAddCollection }) => {
  const [collectionName, setCollectionName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (collectionName.trim()) {
      onAddCollection(collectionName.trim());
      setCollectionName(''); // Clear input field
    } else {
      console.error('Collection name is required!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        placeholder="Enter collection name"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Collection
      </button>
    </form>
  );
};

export default CollectionForm;
