import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import Carousel from "@/components/carousel/carousel";
import LatestsPosts from "@/components/latestPosts/latestposts"
import NewsGrid from "@/components/newsGrid/newsGrid";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;

}

export default async function Home() {
  const data = (await getData()) as Post[];


  return( 
    <div>
      <Carousel/>
      <LatestsPosts/>
      <NewsGrid/>       
      </div>
    );
}
