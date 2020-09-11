import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import { FaTshirt, FaMobileAlt, FaCamera } from 'react-icons/fa'
import { GiPoloShirt, GiDiamondRing, GiSofa } from 'react-icons/gi'
import { GrPersonalComputer } from 'react-icons/gr'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={FaTshirt} title="Men's clothes" />
            <SidebarRow Icon={GiPoloShirt} title="Women's clothes" />
            <SidebarRow Icon={GiDiamondRing} title="Jewelry & Accessories" />
            <SidebarRow Icon={GiSofa} title="Home" />
            <SidebarRow Icon={FaMobileAlt} title="Phone" />
            <SidebarRow Icon={FaCamera} title="Electronics" />
            <SidebarRow Icon={GrPersonalComputer} title="Computer" />

        </div>
    )
}

export default Sidebar
