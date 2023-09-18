import React from "react"
import "../../app/globals.css"
import { Post } from "../../app/lib/interface";
import { client } from "../../app/lib/sanity";
import Link from "next/link";
import Image from "next/image";



async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;

}

export default async function App() {
  const data = (await getData()) as Post[];

  return (
    <div className="border-y-4">
      <header className="sm:pb-2 xl:pb-6 border-b-2">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl pt-6 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
              LÄS DET SENASTE
            </h1>
          </div>
        </div>
      </header>
    <section className="bg-white dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
        {data.map((post) => (
            <div key={post._id} className="lg:w-3/4 lg:px-6">
                <Image className="object-cover object-center w-full h-80 xl:h-[28rem]" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"width={800} height={800} alt=""/>

                <div>
                    <p className="mt-6 text-sm text-yellow uppercase">{new Date(post._createdAt).toISOString().split("T")[0]}</p>

                    <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                        {post.title}
                    </h1>
                </div>
            </div>
            )
          )
        }

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <ul>
          {data.map((post) => (
            <li key={post._id} className="">
              <article className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                  <p className="text-base font-medium leading-6 text-yellow">
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>
  
                <Link
                  href={`/post/${post.slug.current}`}
                  prefetch
                  className="space-y-3 xl:col-span-3"
                >
                  <div>
                    <h3 className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                      {post.title}
                    </h3>
                  </div>
  
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
