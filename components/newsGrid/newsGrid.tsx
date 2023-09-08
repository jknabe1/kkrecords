import React from 'react'
import Link from "next/link";
import { Information } from "../../app/lib/interface";
import { client } from "../../app/lib/sanity";

async function getData() {
  const query = `*[_type == "information"]`;

  const data = await client.fetch(query);

  return data;

}

export default async function Home() {
  const data = (await getData()) as Information[];


  return( 
    <div></div>
    );
}



