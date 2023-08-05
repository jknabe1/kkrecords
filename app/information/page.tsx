import Link from "next/link";
import { Information } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == "information"]`;

  const data = await client.fetch(query);

  return data;

}

export default async function Home() {
  const data = (await getData()) as Information[];


  return( 
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          INFORMATION OCH KONTAKT
          </h1>
          <p>
          Här kan du söka fram olika typer av resurssidor som blanketter, deltagarvillkor, information om försäkring och andra slags resurser som du kan tänkas behöva. Om du inte hittar vad du söker, använd stora söket högst upp i menyn.
          </p>
        </div>
  
        <ul>
          {data.map((information) => (
            <li key={information._id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(information._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>
  
                <Link
                  href={`/information/${information.slug.current}`}
                  prefetch
                  className="space-y-3 xl:col-span-3"
                >
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {information.title}
                    </h3>
                  </div>
  
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {information.overview}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
}
