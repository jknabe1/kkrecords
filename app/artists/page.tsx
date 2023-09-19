import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'



const page = () => {
  return (
    <div>
        <section className="gallery">
  <div className="container">
    <div className="grid">
      <div className="column-xs-12 column-md-4">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/8b1cWDyvT7Y" alt='' width={800} height={800} />
          <figcaption className="img-content">
            <h2 className="title">Smart Watch</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Smart Watch</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div className="column-xs-12 column-md-4">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/5VXH4RG88gc" alt='' width={800} height={800}  />
          <figcaption className="img-content">
            <h2 className="title">Camera Film</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Camera Film</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div className="column-xs-12 column-md-4">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/XtUd5SiX464" alt='' width={800} height={800}/>
          <figcaption className="img-content">
            <h2 className="title">Coffee</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Coffee</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div className="column-xs-12 column-md-6">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/JYGnB9gTCls" alt='' width={800} height={800}  />
          <figcaption className="img-content">
            <h2 className="title">Phone</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Phone</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div className="column-xs-12 column-md-6">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/-RBuQ2PK_L8" alt='' width={800} height={800}  />
          <figcaption className="img-content">
            <h2 className="title">Keyboard</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Keyboard</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div className="column-xs-12">
        <figure className="img-container">
          <Image src="https://source.unsplash.com/P44RIGl9V54" alt='' width={800} height={800}  />
          <figcaption className="img-content">
            <h2 className="title">Wrist Watch</h2>
            <h3 className="category">Showcase</h3>
          </figcaption>
          <span className="img-content-hover">
            <h2 className="title">Wrist Watch</h2>
            <h3 className="category">Showcase</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default page