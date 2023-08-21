import Image from 'next/image'
import React from 'react'


const FooterImage = () => {
  return (
    <div>
        <section className="block">
			<div className="flex border-y box-border">
				<div className="w-1/3 h-auto">
					<figure className="block w-full h-full m-0 border-r-4 border-b-4">
						<Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/05/HOTPOP-1.png" width={1920} height={1080} alt="" priority/>
					</figure>
					<div className="">
						<span>
						<h1></h1>
						</span>
					</div>
				</div>
				<div className="w-1/3 h-auto">
					<figure className="block w-full h-full m-0 border-r-4 border-b-4">
						<Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/05/HOTPOP-1.png" width={1920} height={1080} alt="" priority/>
					</figure>
					<div className="">
						<span>

						</span>
					</div>
				</div>
				<div className="w-1/3 h-auto">
					<figure className="block w-full h-full m-0 border-b-4">
						<Image src="https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/05/HOTPOP-1.png" width={1920} height={1080} alt="" priority/>
					</figure>
					<div className="">
						<span>

						</span>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default FooterImage