import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'


const DashBoard = () => {
  return (
    <div>
        <div className="flex">
            <div className="bg-gray-200/20 border-r min-h-screen w-1/4">
                <SideBar />
            </div>
            <div className="bg-gray-200/20 border-r min-h-screen w-full">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashBoard