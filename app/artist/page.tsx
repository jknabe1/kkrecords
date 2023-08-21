import React from 'react'

const page = () => {
  return (
    <div>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-2 row-span-3">1</div>
            <div className="col-span-2 row-span-2 col-start-3">2</div>
            <div className="row-span-3 col-start-5">3</div>
            <div className="row-span-2 col-start-1 row-start-4">4</div>
            <div className="row-span-2 col-start-2 row-start-4">5</div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-4">6</div>
            <div className="col-span-2 col-start-3 row-start-3">7</div>
            <div className="row-span-2 col-start-3 row-start-4">8</div>
        </div>
    </div>
  )
}

export default page