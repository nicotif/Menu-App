import React from "react"
import MenuItem from "../MenuItem"
import "./Menu.css" // optional if you want local CSS

const Menu = ({ menuName, menuItems }) => {
  // menuItems is an array of { itemId, itemPrice, itemName, itemDescription }
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menuItems">
        {menuItems.map((item) => (
          // "key" should be unique; itemId is unique for each item
          <MenuItem key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Menu