import React from 'react'

const Start = () => {
  return (
    <div>
        <div className="flex">
            <div className="bg-gray-200/20 border-r min-h-screen w-1/4">
                <h1 className="p-4 text-gray-500 font-semibold">My Collections</h1>
                <div className=""></div>                
            </div>
            <div className="bg-white-500 w-full py-4 px-2">
                <div className="bg-white-500">
                    <div className="py-4 w-full">
                        <h1 className="text-2xl">Test APIs</h1>
                        <div className="mx-4 mt-4 flex">
                            <input type="url" name="" id="" className="bg-gray-200/40 pl-2 w-full h-12 border rounded" placeholder='Enter or Past API URL'/>
                            <button className='bg-blue-500 w-1/4 ml-2 rounded text-white'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white-500">
                    <div className="py-4 w-full">
                        
                    </div>
                </div>
                <div className="bg-white-500">
                    <div className="py-4 w-full">
                        output
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Start