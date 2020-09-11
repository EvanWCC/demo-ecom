import React from 'react'
import '../css/SidebarRow.css'
const SidebarRow = ({Icon, title}) => {
    return (
        <div className="sidebarRow">
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
