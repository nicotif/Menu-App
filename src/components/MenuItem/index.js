import React from "react"
import "./MenuItem.css" // optional if you want local CSS

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-item" id={`menu-item-${itemId}`}>
      <span>${itemPrice}</span>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default MenuItem