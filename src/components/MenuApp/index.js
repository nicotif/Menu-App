import React from "react"
import Menu from "../Menu"
import "./MenuApp.css" // optional if you want local CSS

const MenuApp = ({ data }) => {
  // 'data' is an array of objects: [ {menuName, menuItems}, ...]
  return (
    <div className="MenuApp">
      {data.map((menuObj, index) => (
        <Menu
          key={index}
          menuName={menuObj.menuName}
          menuItems={menuObj.menuItems}
        />
      ))}
    </div>
  )
}

export default MenuApp