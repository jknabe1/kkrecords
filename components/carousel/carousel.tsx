"use client"

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged() {
        console.log('New pic, you are welcome.')
      },
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
    <div>
      <div ref={sliderRef} className="keen-slider h-full w-full overflow: hidden">
  <div style={{width: '100%', height: '100%', position: 'relative'}} className="keen-slider__slide number-slide1">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-13-4-1024x593.jpg" alt="1" width={1920 } height={1080} priority/>
  </div>
  <div className="keen-slider__slide number-slide2">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-14-2-1024x593.jpg" alt="2" width={1920} height={1080}/>
  </div>
  <div className="keen-slider__slide number-slide3">
    <Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-15-1-1024x593.jpg" alt="3" width={1920} height={1080}/>
  </div>
  <div className="keen-slider__slide number-slide4">
    <Image src="/image4.png" alt="4" width={0} height={0}/>
  </div>
  <div className="keen-slider__slide number-slide5">
    <Image src="/image5.png" alt="5" width={0} height={0}/>
  </div>
  <div className="keen-slider__slide number-slide6">
    <Image src="/image6.png" alt="6" width={0} height={0}/>
  </div>
</div>
    </div>
  )
}

export default Carousel
