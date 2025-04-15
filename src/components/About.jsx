/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 7,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] justified-text">
            Welcome! I&apos;m Firdaus, a junior web developer and data analyst with a strong ambition to become an expert in my field. 
            Always open to learning new skills, I am very interested in Artificial Intelligence (AI). 
            I have the capability to implement AI and deep learning projects into web applications, and my main interest lies in leveraging AI technology to create impactful, innovative solutions.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
