import React from 'react'
import image from "../inventory/inventory.jpg";

function Inventory() {
  return <>
         <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <img style={{height:"20vh" , width:"10vw" }} src={image} alt="inventory"/>
        </button>
  </>
}

export default Inventory