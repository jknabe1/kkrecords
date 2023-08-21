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
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            SENASTE SLÄPPEN
          </h1>
        </div>
    <div ref={ref} className="keen-slider pb-8">
      <div className="keen-slider__slide number-slide1">
        <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/07/RUSTIN-IN-THE-RAIN-mini-300x300.jpg" width={1920} height={1080} alt='1' priority/>
      </div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
    </div>
  )
}
