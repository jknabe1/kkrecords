"use client"

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div className='border-y-4 dark:border-white border-black'>
      <div ref={sliderRef} className="keen-slider h-full w-full overflow: hidden pt-12">
  <div style={{width: '100%', height: '100%', position: 'relative'}} className="keen-slider__slide number-slide1">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-13-4-1024x593.jpg" alt="{artist.name}" width={1920 } height={1080} priority/>
  </div>
  <div className="keen-slider__slide number-slide2">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-14-2-1024x593.jpg" alt="2" width={1920} height={1080}/>
  </div>
  <div className="keen-slider__slide number-slide3">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-15-1-1024x593.jpg" alt="3" width={1920} height={1080}/>
  </div>
  </div>
  </div>
  )
}

export default Carousel
