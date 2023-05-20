// import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react';
// // import Nav from "./components/nav"

// import ProjectsPage from "./projects/page";
import prueba from "./prueba/page"
// import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

// export default function Home() {

//   return (
//     <div className="bg-dark">
//           {/* <main> <Presentation /></main>
//           <section><About /></section>
//           <section><Skills /></section>
//           <section><Call /> </section> */}


//     </div>
//   )
// }
"use client"
import { data } from 'autoprefixer';
import Image from 'next/image'
import Link from "next/link"
import Presentation from "./presentation/page"
import About from "./about/page"
import Skills from "./components/skills"
import Call from "./components/call"
import { use, useEffect, useState } from 'react'
type Repository = {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  }
}
async function getData(username: string): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data: Repository[] = await res.json();
  return data;
}

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [avatar, setAvatar] = useState<string>('');
  useEffect(() => {
    const fetchdata = async () => {
      const dataAc = await getData('DilanMS28');
      setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
      setRepos(dataAc);
    };
    fetchdata();

  }, []);

  return (
    <div className="bg-dark">
      <main> <Presentation /></main>
      <section><About /></section>
      <section><Skills /></section>
      <section><Call /> </section>

      <div className='Div_PhoProfile'>
        <div>
          {repos.map((repo: Repository) => (
            <div key={repo.id}>
              <h2>
                <a href={`https://github.com/DilanMS28/${repo.name}`} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}
