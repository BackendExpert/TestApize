import React from 'react'
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div className=''>
        <div className="flex justify-between">
            <h1 className="p-4 text-xl text-gray-500">My Collections</h1>
            <Link>
                <div className="flex p-4">
                    <MdOutlineAddBox className='text-gray-500 h-8 w-auto' />
                    <h1 className="text-gray-500 pt-1">Create</h1>
                </div>
            </Link>
        </div>
        <hr />
    </div>
  )
}

export default Collection