/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/project-1.jpg",
    title: "Classification Website",
    tags: ["Classification", "Development", "Neural Network"],
    projectLink: "https://github.com/firdauzzaid/KlasifikasiPKH",
  },
  {
    imgSrc: "./images/project-2.jpg",
    title: "Whatsapp Automation",
    tags: ["Automation", "Development", "Selenium"],
    projectLink: "https://github.com/firdauzzaid/dashboard-administrator",
  },
  {
    imgSrc: "./images/project-3.jpg",
    title: "Personal Portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://firdauzzaid.github.io/Portofolio/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My Portofolio Highlights
          </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
