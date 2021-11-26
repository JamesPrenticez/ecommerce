import { useState } from 'react'
import { sliderItems } from '../data'

function Slider() {
  const [img, setImg] = useState(1)

  return (
    <>
        <div 
          className="grid grid-cols-12"
          style={{backgroundColor: `${sliderItems[1].bg}`}}
        >
          <div className="h-[800px] col-start-2 col-span-10">
            <img 
              className="min-w-[600px] min-h-[800px] col-start-1 col-span-11"
              src={sliderItems[img].src}
            />
          </div>

          {/* Left Arrow */}
          <div 
            onClick={() => console.log("Left")} 
            className="w-full col-start-1 col-span-1 row-start-1 flex items-center justify-center hover:cursor-pointer hover:bg-red-500 hover:bg-opacity-20 transistion ease-in-out duration-1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          {/* Right Arrow */}
          <div 
            onClick={() => console.log("Right")} 
            className="w-full col-start-12 col-span-1 row-start-1 flex items-center justify-center hover:cursor-pointer hover:bg-red-500 hover:bg-opacity-20 transistion ease-in-out duration-1000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>


        </div>
    </>
  )
}

export default Slider
