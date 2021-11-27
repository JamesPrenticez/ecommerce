import { cata } from '../data'

function Grid() {
  console.log(cata)
  return (
    <div className="grid grid-cols-3 grid-rows-2 w-full h-screen bg-gray-50">
      {cata.map((item, index) => (
        <div 
          key={index}  
          className="col-span-1 w-full h-full border-2 border-red-500">
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Grid
