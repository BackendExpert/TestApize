import React from 'react';
import { useParams } from 'react-router-dom';
import APITest from '../components/APITest';

const CollectionSelected = () => {
  const { name } = useParams(); 

  return (
    <div className="">
      <div className="p-4">
        <h1 className="text-xl text-gray-500"><span className='bg-gray-400 text-white px-2 py-1 rounded'>{name}</span> Collection is Selected</h1>
      </div>    
      <hr />

      <div className="">
        <APITest />
      </div>
    </div>
  );
};

export default CollectionSelected;
