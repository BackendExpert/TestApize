import React from 'react'
import RequestBuilder from '../assets/Request.png'
import Respone from '../assets/Responce.png'
import Collection from '../assets/Collection.png'
import { Link } from 'react-router-dom'

const HomeDash = () => {
  return (
    <div>
        <div className="text-center mt-16 text-gray-500">
            <h1 className="text-2xl py-4">Welcome to TestAPIze</h1>
            <p className="">API development and testing platform</p>

            <center className='my-4'>
                <Link to={'/Dashboard/Collection'}>
                  <button className='bg-blue-600 text-white rounded py-2 px-4'>Create Collection</button>
                </Link>                
            </center>
        </div>
        <div className="mt-4 px-4">
          <h1 className="text-gray-500">Available Features of TestAPIze</h1>

          <div className="grid grid-cols-3 gap-3 my-4">
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  <h1 className="text-center text-gray-500">Request Builder</h1>
                  <img src={RequestBuilder} alt="" className='rounded-md mt-4'/>
              </div>
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  <h1 className="text-center text-gray-500">Response Viewer</h1>
                  <img src={Respone} alt="" className='rounded-md mt-4'/>
              </div>
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  <h1 className="text-center text-gray-500">Collections</h1>
                  <img src={Collection} alt="" className='rounded-md mt-4'/>
              </div>
             
          </div>
        </div>
    </div>
  )
}

export default HomeDash