import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => {
  return (
    <main className="bg-accent">
      <div className="container mx-auto px-10">
        <div className="flex flex-row">
          <StaticImage
            src="../images/mugshot.jpeg"
            className="rounded-full h-48 w-48 md:h-64 md:w-64 my-4"
          />
          <div className="flex-grow flex flex-col justify-center p-10">
            <h1 className="inline text-4xl md:text-6xl text-secondary font-medium">
              Guruprerana Shabadi
            </h1>
            <h2 className="inline text-xl md:text-2xl text-accent-dark font-medium mt-1">
              ...you can call me{" "}
              <b className="text-primary font-normal">Guru!</b>
            </h2>
            <h2 className="inline text-2xl md:text-3xl text-accent-dark font-medium mt-3">
              Third year undergraduate student at Ecole Polytechnique
            </h2>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/guruprerana-shabadi-499743a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="hover:opacity-50"
                />
              </a>
              <a
                href="https://github.com/guruprerana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="ml-2 hover:opacity-50"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCELz6jBUPW80sNSBeHZEn4Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="ml-2 hover:opacity-50"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-accent-dark pt-10 text-lg">
          I am a third year undergraduate student at École Polytechnique
          studying mathematics and computer science. My current research
          interest lies in formal methods for cyber-physical systems (CPS), a
          topic I am actively thinking about and working on under the guidance
          of{" "}
          <a
            href="http://www.sergiomover.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Prof. Sergio Mover
          </a>
          . I am fascinated by the topics of safe automation and safety in
          human-robot interactions. I hope to work in these areas during my
          graduate studies. I am also interested in formal verification of AI
          systems trained with machine learning algorithms. My CV is{" "}
          <a
            href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            here
          </a>
          .
        </p>
        <p className="text-accent-dark pt-5 text-lg">
          When I am not verifying automated systems around me, I delve deeply
          into software development and I am currently working with a team of 4
          brilliant innovators on building Weave! Lastly, education is something
          I am deeply passionate about and a long term goal of mine is to work
          on improving computer science education and outreach.
        </p>
        <h3 className="text-primary text-4xl mt-8">What's up with me!</h3>
        <ul className="list-inside list-disc text-lg text-accent-dark mt-3">
          <li>
            October 11, 2021: I presented a talk on my current research at a{" "}
            <a
              href="https://www.lix.polytechnique.fr/~goubault/aid-cieds-2021.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              reunion
            </a>{" "}
            of researchers from around France working in similar areas which
            took place at{" "}
            <a
              href="https://www.lix.polytechnique.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              LIX
            </a>
            ! Find my slides{" "}
            <a
              href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/communication-delays-cps.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              here
            </a>{" "}
            or a recording here.
          </li>
          <li>yoo</li>
        </ul>
        <h3 className="text-primary text-4xl mt-8">Current Research</h3>
        <h4 className="text-secondary text-2xl mt-4">
          Accounting for communication delays in a hybrid system - advised by{" "}
          <a
            href="http://www.sergiomover.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Prof. Sergio Mover
          </a>{" "}
          (June 2021 - Present)
        </h4>
        <p className="text-accent-dark pt-2 text-lg">
          Cyber-physical systems use communication protocols to gather
          information on their environments in order to react to changes around
          them. However, in practice these protocols are far from perfect and
          can have non-negligible delays in relaying state information, i.e.,
          there might be a delay in observing the current value of a state
          variable. To further motivate the study of these delays, we explore
          the case study of a collision avoidance protocol with a group of
          robots navigating in space while avoiding collision. Here, we cannot
          ensure that each robot has exact information of the other robots in
          the system at every instant of time. To model these delays, we revisit
          the class of hybrid automata called lazy hybrid automata in the
          continuous, instead of discrete, semantic. Lazy hybrid automata model
          non-deterministic delays in observing the value of “input variables”
          used in invariants and guard conditions. We then discuss some results
          we have obtained on the expressiveness of some restricted classes of
          (continuous) lazy hybrid automata by providing their translations into
          classical hybrid automata.
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
