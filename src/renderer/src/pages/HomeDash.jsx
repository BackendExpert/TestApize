import React from 'react'

const HomeDash = () => {
  return (
    <div>
        <div className="text-center mt-16 text-gray-500">
            <h1 className="text-2xl py-4">Welcome to TestAPIze</h1>
            <p className="">API development and testing platform</p>

            <center className='my-4'>
                <button className='bg-blue-600 text-white rounded py-2 px-4'>Create Collection</button>
            </center>
        </div>
        <div className="mt-4 px-4">
          <h1 className="text-gray-500">Features of TestAPIze</h1>

          <div className="grid grid-cols-3 gap-3 my-4">
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  
              </div>
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia culpa eos blanditiis veritatis possimus iste cum? Sapiente fuga, eveniet sequi, tempora, incidunt sed numquam quis quo minima nostrum officiis omnis?
              </div>
              <div className="bg-gray-400/20 rounded shadow-md p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia culpa eos blanditiis veritatis possimus iste cum? Sapiente fuga, eveniet sequi, tempora, incidunt sed numquam quis quo minima nostrum officiis omnis?
              </div>
          </div>
        </div>
    </div>
  )
}

export default HomeDash