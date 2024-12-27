import React, { useState } from 'react'
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";

const Collection = () => {
    const [CreateCollectionClick, SetCreateCollectionClick] = useState(0)

    const CreateCollection = () => {
        SetCreateCollectionClick(1)
    }

    const CloseCollection = () => {
        SetCreateCollectionClick(0)
    }

  return (
    <div className=''>
        <div className="flex justify-between">
            <h1 className="p-4 text-xl text-gray-500">My Collections</h1>
            <div className="flex p-4 cursor-pointer" onClick={CreateCollection}>
                <MdOutlineAddBox className='text-gray-500 h-8 w-auto' />
                <h1 className="text-gray-500 pt-1">Create</h1>
            </div>
        </div>
        <hr />
        {
            CreateCollectionClick ? 
                <div className="bg-gray-200/50 shadow rounded border p-4 m-2">
                    <div className="flex justify-between">
                        <h1 className="text-gray-500">Create New Collection</h1>
                        <IoMdCloseCircle className='text-red-500 h-6 w-auto' onClick={CloseCollection}/>
                    </div>
                </div>
            :
                <div className="">No Click</div>
        }

        <div className=""></div>
    </div>
  )
}

export default Collection