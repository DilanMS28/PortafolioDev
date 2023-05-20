import Link from "next/link";
import Image from "next/image";
import React from "react";
type Repository = {
  id: number;
  name: string;
  html_url: string;
  image_url: string;
  owner : {
    avatar_url : string;
    url : string;
  }

}

export default async function proyectos() {
    const data = await getData();
  return (     
    <div className="proyectos container">      
      <h1 className="proyecto">Projects</h1>
      {/* <h2>{data.name}</h2> */}
      {/* <Image  
        src={data.owner.avatar_url}
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
      <p className="txt">{data.name}</p>
    </div>
  )
}

export async function getData() {
    const res = await fetch('https://api.github.com/users/DilanMS28/repos');
    const data: Repository = await res.json();
    return data;
}
