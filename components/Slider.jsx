import { useState } from 'react'
import { sliderItems } from '../data'

function Slider() {
  const [img, setImg] = useState(1)
  const [activeIndex, setIndex] = useState(0)

  const goToPrevSlide = () => {
    let index = activeIndex
    let length = sliderItems.length
    if(index < 1){
      index = length -1
    } else {
      index--
    }
    setIndex(index)
  }

  const goToNextSlide = () => {
    let index = activeIndex
    let length = sliderItems.length
    if(index === length - 1){
      index = 0
    } else {
      index ++
    }
    setIndex(index)
  }

  return (
    <>
        <div 
          className="grid grid-cols-12 h-screenNav"
          style={{backgroundColor: `${sliderItems[1].bg}`}}
        >
          <div className="h-[800px] col-start-2 col-span-10">
            <img 
              className="min-w-[600px] min-h-[800px] col-start-1 col-span-11"
              src={sliderItems[activeIndex].src}
            />
          </div>

          {/* Left Arrow */}
          <div 
            onClick={() => goToPrevSlide()} 
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
            onClick={() => goToNextSlide()} 
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
