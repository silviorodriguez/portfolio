import React from 'react'

/** Components */
import ProjectCard from './ProjectCard'

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Full stack movie app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://movie-red-fronted.vercel.app/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Backend Movie app',
      tags: ['API', 'SPA'],
      projectLink: 'https://movie-red-backend.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Game Memory',
      tags: ['Development', 'API'],
      projectLink: 'https://game-memory-github-io.vercel.app/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Port-folio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://portfolio-tawny-tau-76.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/silviorodriguez/Pokedex.gitpage.io'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/silviorodriguez/Pinterest'
    },
  ];

const Work = () => {
  return (
    <section
    id='work'
    className='section'
    >
        <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
        My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes='reveal-up'
                />
            ))}
        </div>

        </div>
    </section>
  )
}

export default Work