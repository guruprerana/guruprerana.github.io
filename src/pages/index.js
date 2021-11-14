import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main className="bg-accent">
      <Helmet>
        <title>Guru Shabadi</title>
      </Helmet>
      <div className="container max-w-5xl mx-auto px-5">
        <div className="xl:flex xl:flex-row items-center text-center">
          <StaticImage
            src="../images/mugshot.jpeg"
            className="rounded-full h-48 w-48 md:h-52 md:w-52 my-4"
          />
          <div className="flex-grow flex flex-col justify-center p-10 xl:text-left">
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
                href="mailto:guruprerana.shabadi@polytechnique.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="hover:opacity-50"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/guruprerana-shabadi-499743a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="ml-2 hover:opacity-50"
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
          studying mathematics and computer science. I have taken a broad number
          of courses in both these disciplines. My current research interest
          lies in formal methods for cyber-physical systems (CPS), a topic I am
          actively thinking about and working on under the guidance of{" "}
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
          brilliant innovators on building{" "}
          <a
            href="#weave"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Weave
          </a>
          ! Lastly, education is something I am deeply passionate about and a
          long term goal of mine is to work on improving computer science
          education and outreach.
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
          <li>
            I am currently in the process of formally writing down my research
            and presenting my proofs. Find the latest version{" "}
            <a
              href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              here
            </a>
            .
          </li>
        </ul>
        <h3 className="text-primary text-4xl mt-8">Current Research</h3>
        <h4 className="text-secondary text-2xl mt-4">
          Accounting for communication delays in a hybrid system (June 2021 -
          Present)
        </h4>
        <p className="text-accent-dark pt-2 text-lg">
          I am currently working under{" "}
          <a
            href="http://www.sergiomover.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Prof. Sergio Mover
          </a>{" "}
          with the{" "}
          <a
            href="http://www.lix.polytechnique.fr/cosynus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Cosynus team
          </a>{" "}
          at{" "}
          <a
            href="https://www.lix.polytechnique.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            LIX
          </a>{" "}
          (computer science laboratory at Ecole Polytechnique) on handling
          communication delays which arise when there are multiple hybrid
          systems interacting with each other.
        </p>
        <ul className="list-inside list-disc text-lg text-accent-dark mt-3">
          <li>
            Slides{" "}
            <a
              href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/communication-delays-cps.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              here
            </a>{" "}
            or me presenting my work here.
          </li>
          <li>
            [IN PROGRESS] Latest version of my formal report can be found{" "}
            <a
              href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-50"
            >
              here
            </a>
            .
          </li>
        </ul>
        <center>
          <StaticImage src="../images/drones-safe-nav.png" className="mt-5" />
        </center>
        <p className="text-accent-dark pt-5 text-lg">
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
        <h4 className="text-secondary text-2xl mt-4">
          Safety verification of neural networks (Starting January 2022)
        </h4>
        <p className="text-accent-dark pt-5 text-lg">
          From January 2022, I will be working with{" "}
          <a
            href="https://caterinaurban.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Prof. Caterina Urban
          </a>{" "}
          at{" "}
          <a
            href="https://www.ens.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            ENS, Paris
          </a>{" "}
          on neural network verification towards writing my undergraduate
          thesis!
        </p>
        <center>
          <StaticImage src="../images/nn-safe.png" className="mt-5" />
        </center>
        <h3 className="text-primary text-4xl mt-8">Software Development</h3>
        <p className="text-accent-dark pt-5 text-lg">
          In my free time I love getting involved in software development and
          over the years, I have dabbled and become good with multiple frontend
          and backend development frameworks. Some of my favorites are Django,
          React, React Native, Vue.js, and Android! My hobby for software
          development was born out of an internship I did during my first summer
          of college at{" "}
          <a
            href="https://fasfox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-50"
          >
            Fasfox.
          </a>
        </p>
        <h4 className="text-secondary text-2xl mt-4" id="weave">
          Weave (October 2020 - Present)
        </h4>
        <center>
          <StaticImage src="../images/weave-logo.png" className="mt-5 w-48" />
        </center>
        <p className="text-accent-dark pt-5 text-lg">
          For over a year, I have been working with 4 other motivated friends
          (who also happen to be brilliant entrepreneurs) from my university on
          building Weave: a socio-professional networking platform tailor-made
          to the needs of the artistic and cultural industries! I lead the
          development team at Weave.
        </p>
        <p className="text-accent-dark pt-5 pb-10 text-lg">
          More info on Weave and its official launch coming very soon!
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
