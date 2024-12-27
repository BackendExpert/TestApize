import { useNavigate } from 'react-router-dom';

const CollectionList = ({ collections }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {Object.keys(collections).map((collection) => (
        <div
          key={collection}
          className="p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={() => navigate(`/apis/${collection}`)}
        >
          {collection}
        </div>
      ))}
    </div>
  );
};

export default CollectionList;