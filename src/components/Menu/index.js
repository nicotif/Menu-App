import React from "react"
import MenuItem from "../MenuItem"
import "./Menu.css" 

const Menu = ({ menuName, menuItems }) => {
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menuItems">
        {menuItems.map((item) => (
          <MenuItem key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Menu