import { Event } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";


async function getData(slug: string) {
  const query = `*[_type == "event" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Event;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <ul>
          {data.map((event) => (
            <li key={event._id} className="">
              <article className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                <div>
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(event._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>
  
                <Link
                  href={`/event/${event.slug.current}`}
                  prefetch
                  className="space-y-3 xl:col-span-3"
                >
                  <div>
                    <h3 className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                      {event.title}
                    </h3>
                  </div>
  
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {event.overview}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
  );
}