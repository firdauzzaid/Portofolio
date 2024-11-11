/**
 * @Copyright 2024 Znonymous
 * @license Apache 2-0
 */

/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content: "Implementation of Artificial Neural Networks as a Recommendation for Eligibility for Web-Based Family Hope Program Assistance Selection",
    name: "Intellectual Property Rights Certificate",
    company: "Ministry of Law and Human Rights",
    certificate: "https://drive.google.com/file/d/1LgJjqb7jOqdcSFpviZcIgsqqEYakDIvF/view?usp=sharing",
  },
  {
    content: "English Proficiency Test",
    name: "TOEFL Certification",
    company: "UTY Education, Certification and Training Center",
    certificate: "https://drive.google.com/file/d/14Gc3tpk4RQRtMvIuVmJyGZgUrrlVFerj/view?usp=sharing",
  },
  {
    content: "Data Access, Basic Transformation, Working with Multiple Datasets, Pivot Tables, Routines and Simple Text Processing",
    name: "Data Engineering Professional Certification",
    company: "RapidMiner",
    certificate: "https://drive.google.com/file/d/1J1su_vkhtJ_9eqkhGAyfsuSXtivBsVfv/view?usp=sharing",
  },
  {
    content: "Introduce Dataset, Big Data, Data Preprocessing and Requirement Tools ",
    name: "Basic Data Science",
    company: "Dicoding",
    certificate: "https://drive.google.com/file/d/1HOAzpo24dy_tAdcuFO28k9nDj0o7SA92/view?usp=sharing",
  },
];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-100 70%',
        end: '400% 70%',
        scrub: true
      },
      x: '-700'
    })
  });

  return (
    <section id="certificate" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My Certificate
          </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, company, certificate }, key) => (
            <ReviewCard
              key={key}
              name={name}
              company={company}
              content={content}
              certificate={certificate}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
