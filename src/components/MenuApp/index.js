import React from "react"
import Menu from "../Menu"
import "./MenuApp.css" 

const MenuApp = ({ data }) => {
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