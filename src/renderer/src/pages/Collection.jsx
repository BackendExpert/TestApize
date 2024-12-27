// src/pages/Collection.jsx
import React, { useState, useEffect } from 'react'
import { MdOutlineAddBox } from "react-icons/md"
import { IoMdCloseCircle } from "react-icons/io"
import CollectionForm from '../components/CollectionForm'

const Collection = () => {
  const [CreateCollectionClick, SetCreateCollectionClick] = useState(0)
  const [collections, setCollections] = useState({})

  // Load collections from file on component mount
  useEffect(() => {
    const loadCollections = async () => {
      const data = await window.api.loadCollections()
      setCollections(data)
    }

    loadCollections()
  }, [])

  const CreateCollection = () => {
    SetCreateCollectionClick(1)
  }

  const CloseCollection = () => {
    SetCreateCollectionClick(0)
  }

  const handleAddCollection = (collectionName) => {
    const updatedCollections = { ...collections, [collectionName]: {} }
    setCollections(updatedCollections)

    // Save updated collections to the file using the API
    window.api.saveCollections(updatedCollections)

    console.log('New collection added:', collectionName)
  }

  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h1 className="text-xl text-gray-500">My Collections</h1>
        <div className="flex cursor-pointer" onClick={CreateCollection}>
          <MdOutlineAddBox className="text-gray-500 h-8 w-auto" />
          <h1 className="text-gray-500 pt-1">Create</h1>
        </div>
      </div>

      <hr />

      {
        CreateCollectionClick ? 
          <div className="bg-gray-200/50 shadow rounded border p-4 m-2">
            <div className="flex justify-between">
              <h1>Create New Collection</h1>
              <IoMdCloseCircle className="text-red-500 h-6 w-auto cursor-pointer" onClick={CloseCollection} />
            </div>

            <CollectionForm onAddCollection={handleAddCollection} />
          </div>
        :
          <div className=""></div>
      }

      <div className="p-4 ">
        <h1 className="text-xl text-gray-500">My Collection List</h1>
        <ul className="space-y-2 pt-6 border-b">
          {Object.keys(collections).map((collection, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">{collection}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Collection
