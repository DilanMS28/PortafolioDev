// import { useClient } from 'next/client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  name: string;
  html_url: string;
  image_url: string;
}

function Projects() {
  const [fProjects, setFormattedProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/DilanMS28/repos")
      .then((response) => response.json())
      .then((data) => {
        const formattedData: Project[] = data.map((project: Project) => ({
          id: project.id,
          name: project.name,
          html_url: project.html_url,
          image_url: project.image_url
        }));
        setFormattedProjects(formattedData);
      });
  }, []);

  return (
    <Carousel>
      {fProjects.map((project) => (
        <div key={project.id} className="project-container">
          <a href={project.html_url} id='Name' target="_blank">
            <img src={project.image_url} alt={project.name} />
          </a>
        </div>
      ))}
    </Carousel>
  );
}

export default function ProjectsWrapper() {
  // useClient(); // Marcar el componente como un componente de cliente
  return <Projects />;
}