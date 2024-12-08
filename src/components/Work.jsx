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
    tags: ["Web Design", "Development"],
    projectLink: "https://firdauzzaid.github.io/Portofolio/",
  },
  {
    imgSrc: "./images/Table CRUD.png",
    title: "CRUD Python",
    tags: ["Entry Data", "Flask", "Web Development"],
    projectLink: "https://firdauz.pythonanywhere.com/",
  },
  {
    imgSrc: "./images/analyticsgoogle.png",
    title: "Website Analytics",
    tags: ["Analytics", "Traffic", "Data"],
    projectLink: "https://github.com/firdauzzaid/Analytics-w-Google",
  },
  {
    imgSrc: "./images/desain-mockup.png",
    title: "Coupon Management",
    tags: ["Claimfy", "Voucher", "Web"],
    projectLink: "https://github.com/firdauzzaid/Voucher-Track",
  },
];

const Work = () => {
  return (
    <section id="project" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My Project
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
