import React from 'react'
import style from "./style.module.css"

const Image = ({image}) => {
    return (
        <div className={`border-2 w-full h-full ${style["div1"]} relative`}>
          <div
            className={`${style["overlay"]} absolute text-white flex justify-center items-center font-primary`}
          >
            <div className="px-2">
              <p className="uppercase font-primary font-bold">Room1</p>
              <p className="mt-2 mb-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <button className="bg-blue-400 focus:outline-none border-none px-6 py-2 rounded-md">
                More
              </button>
            </div>
          </div>
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
    );
}

export default Image
