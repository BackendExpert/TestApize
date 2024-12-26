import React from 'react'
import { CiLink } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaGear } from "react-icons/fa6";

const SideBar = () => {
    const sidemune = [
        {id: 1, name: 'Dashboard', icon: <AiFillDashboard className='h-6 w-auto text-gray-500'/>, link: 'Home'},
        {id: 2, name: 'Create Collection', icon: <MdOutlineAddBox className='h-6 w-auto text-gray-500'/>, link: ''},  
        {id: 3, name: 'Settings', icon: <FaGear className='h-6 w-auto text-gray-500'/>, link: 'Settings'},      
    ]
  return (
    <div className=''>
        <div className="flex p-4 ">
            <CiLink className='h-10 w-auto'/>
            <h1 className="pt-2 pl-1">My Workspace</h1>
        </div>
        <hr />

        <div className="">
            {
                sidemune.map((data, index) => {
                    return (
                        <Link to={data.link}>
                            <div className="flex px-4 py-2">       
                                    {data.icon}     
                                    <p className=" pl-2 text-sm pt-1 text-gray-500">{data.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
        <hr />
        <div className="p-4">
            <h1 className="text-gray-500">My Collections</h1>
        </div>


        

    </div>
  )
}

export default SideBar