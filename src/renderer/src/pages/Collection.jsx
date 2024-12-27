// src/pages/Collection.jsx
import React, { useState, useEffect } from 'react'
import { MdOutlineAddBox } from "react-icons/md"
import { IoMdCloseCircle } from "react-icons/io"
import CollectionForm from '../components/CollectionForm'
import { Link } from 'react-router-dom'

const Collection = () => {
  const [CreateCollectionClick, SetCreateCollectionClick] = useState(0)
  const [collections, setCollections] = useState({})
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Load collections from file on component mount
  useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await window.api.loadCollections()
        setCollections(data)
      } catch (error) {
        console.error('Error loading collections:', error)
        setErrorMessage('Failed to load collections.')
      }
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
    // Prevent adding a collection that already exists
    if (collections[collectionName]) {
      setErrorMessage('Collection already exists.')
      return
    }

    const updatedCollections = { ...collections, [collectionName]: {} }
    setCollections(updatedCollections)

    // Save updated collections to the file using the API
    window.api.saveCollections(updatedCollections)
      .then(() => {
        console.log('New collection added:', collectionName)
        setErrorMessage('') // Reset any previous error messages
      })
      .catch((error) => {
        console.error('Error saving collection:', error)
        setErrorMessage('Failed to save the new collection.')
      })
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

      {/* Error Message Display */}
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-2 mt-2 rounded">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      <div className="p-4 ">
        <h1 className="text-xl text-gray-500">My Collection List</h1>
        <ul className="space-y-2 pt-6 border-b">
          {Object.keys(collections).map((collection) => (
            <li key={collection} className="p-2 bg-gray-100 rounded flex justify-between">
              <p>{collection}</p>
              <Link to={`/Dashboard/CollectionSelected/${collection}`}>
                <button className="bg-blue-500 text-white rounded py-1 px-4">Select</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Collection
