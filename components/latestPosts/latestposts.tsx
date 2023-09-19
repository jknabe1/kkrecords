"use client"

import React from 'react'
import "@/app/globals.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'

export default function App() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div>
      <header className="sm:pb-2 xl:pb-6 border-b-2">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl pt-6 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
              SENASTE SLÄPPEN
            </h1>
          </div>
        </div>
      </header>
    <div ref={ref} className="keen-slider p-4">
      <div className="keen-slider__slide number-slide1">
        <Image src={"https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/08/Unknown-10-300x300.jpeg"} width={800} height={600} alt=''></Image>
      </div>
      {/* remove all the other below when cms is connected. */}
      <div className="keen-slider__slide number-slide2"></div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
    </div>
  )
}
