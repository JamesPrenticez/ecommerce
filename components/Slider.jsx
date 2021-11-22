import { useState } from 'react'
import {sliderItems} from '../data'

function Slider() {
  const [img, setImg] = useState(1)

  return (
    <>
        <div style={{backgroundColor: `${sliderItems[1].bg}`}}>
          <img 
            className="min-w=[600px] min-h-[800px]"
            src={sliderItems[img].src}
          />
        </div>
    </>
  )
}

export default Slider
