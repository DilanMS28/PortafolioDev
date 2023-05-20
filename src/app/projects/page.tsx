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
  }
}

async function getData() {
  const res = await fetch('https://api.github.com/users/DilanMS28/repos');
  const data: Repository = await res.json();
  return data;
}

export default async function Page() {
    const data = await getData();
  return (     
    <div className="proyectos container">      
      <h1 className="proyecto">Projects</h1>
      <p>{data.name}</p>
    </div>
  )
}


