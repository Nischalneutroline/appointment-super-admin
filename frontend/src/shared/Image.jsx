import neutrosys from "../assets/neutrosys.png"
import React from "react"
// import "./Image.css"

function Image() {
  return (
    <div className="w-full  overflow-hidden">
      <img
        className="px-2 w-full md:w-[600px] md:h-[600px] md:px-0 object-cover"
        // className=" object-cover"
        src={neutrosys}
        alt="neutrosys"
      ></img>
    </div>
  )
}

export default Image
