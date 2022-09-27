import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import Hyperlink from "../components/Hyperlink";
import Collapsible from "react-collapsible";

const IndexPage = () => {
  return (
    <main className="bg-accent text-justify">
      <Helmet>
        <title>Guru Shabadi</title>
      </Helmet>
      <div className="container max-w-2xl mx-auto px-5">
        <div className="items-center text-center">
          <StaticImage
            src="../images/mugshot.jpeg"
            className="rounded-full h-48 w-48 md:h-52 md:w-52 my-4"
          />
          <div className="flex-grow flex flex-col justify-center p-4">
            <h1 className="inline text-4xl md:text-6xl text-secondary font-medium">
              Guruprerana Shabadi
            </h1>
            <h2 className="inline text-xl md:text-2xl text-accent-dark font-medium mt-1">
              ...you can call me{" "}
              <b className="text-primary font-normal">Guru!</b>
            </h2>
            <h2 className="inline text-2xl md:text-3xl text-accent-dark font-medium mt-3">
              Master's student in Computer Science at Ecole Polytechnique
            </h2>
            <div className="mt-4">
              <Hyperlink href="mailto:guruprerana.shabadi@polytechnique.edu">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="hover:opacity-50"
                />
              </Hyperlink>
              <Hyperlink href="https://www.linkedin.com/in/guruprerana-shabadi-499743a/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="ml-2 hover:opacity-50"
                />
              </Hyperlink>
              <Hyperlink href="https://github.com/guruprerana">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="ml-2 hover:opacity-50"
                />
              </Hyperlink>
            </div>
          </div>
        </div>
        <p className="text-accent-dark pt-5 text-lg">
          I am currently a candidate in the Parisian Masters of Research in
          Computer Science (MPRI) program at École Polytechnique. I previously
          graduated from École Polytechnique with a bachelor's degree in
          mathematics and computer science. I am interested in everything formal
          methods, cyber-physical systems, safe automation, neural program
          synthesis, neurosymbolic programming, logic, programming languages,
          static analysis, homotopy type theory(?), and category theory. Don't
          worry I don't <i>actually understand</i> everything I mentioned there
          (yet). Basically, I am curious about way too many things, and still
          trying to navigate the world of research! So far, I have worked in the
          areas of <b>cyber-physical systems</b> and{" "}
          <b>abstract interpretation.</b> Hoping to discover the other topics
          one by one! My CV is{" "}
          <Hyperlink href="https://github.com/guruprerana/cv/raw/master/shabadi.pdf">
            here
          </Hyperlink>
          . A cheesy long term goal of mine is to build a world where autonomous
          systems are deeply integrated with the environment, where we can
          ensure safe and fair human-technology interactions, and where
          automation drives the march towards sustainable development.
        </p>
        <p className="text-accent-dark pt-5 text-lg">
          When I am not verifying programs/autonomous systems around me, I
          dabble in software development and I am currently working with a team
          of 4 brilliant innovators on building{" "}
          <Hyperlink samePage href="#anemone">
            Anemone
          </Hyperlink>
          ! Lastly, education is something I am deeply passionate about and a
          long term goal of mine is to work on improving computer science
          education and outreach.
        </p>
        <h3 className="text-primary text-4xl mt-8">What's up with me!</h3>
        <ul className="list-inside list-disc text-lg text-accent-dark mt-3">
          <li>
            September 15, 2022: I received the Global Winner in Computer Science
            award at the{" "}
            <Hyperlink href="https://undergraduateawards.com/winners/global-winners-2022">
              Global Undergraduate Awards
            </Hyperlink>{" "}
            for my work on static analysis of data science software.
          </li>
          <li>
            April 4, 2022: Submitted by bachelor thesis. I worked on verifying
            data science software! Find it{" "}
            <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/bachelor-thesis.pdf">
              here.
            </Hyperlink>
          </li>
          <li>
            October 11, 2021: I presented a talk on my research in hybrid
            systems at a{" "}
            <Hyperlink href="https://www.lix.polytechnique.fr/~goubault/aid-cieds-2021.html">
              reunion
            </Hyperlink>{" "}
            of researchers from around France working in similar areas which
            took place at{" "}
            <Hyperlink href="https://www.lix.polytechnique.fr/">LIX</Hyperlink>!
            Find my slides{" "}
            <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/communication-delays-cps.pdf">
              here.
            </Hyperlink>{" "}
            A (re-)recording of the talk is{" "}
            <Hyperlink href="https://youtu.be/mUKBk0PEpVs">here!</Hyperlink>
          </li>
          <li>
            Find the report of my work on delays in hybrid systems{" "}
            <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf">
              here
            </Hyperlink>
            .
          </li>
        </ul>
        <h3 className="text-primary text-4xl mt-8">Research Experience</h3>
        <Collapsible
          trigger={
            <div>
              <h4 className="text-secondary text-2xl mt-4 hover:opacity-50">
                Bachelor thesis: Static analysis of data science software
                (January 2022 - Present)
              </h4>
              <p className="text-accent-dark pt-5 text-lg">
                Working with{" "}
                <Hyperlink href="https://caterinaurban.github.io/">
                  Prof. Caterina Urban
                </Hyperlink>{" "}
                at the{" "}
                <Hyperlink href="https://team.inria.fr/antique/">
                  ANTIQUE team
                </Hyperlink>{" "}
                of <Hyperlink href="https://www.ens.fr/">ENS, Paris</Hyperlink>{" "}
                on the design of abstractions to facilitate static analysis of
                data science Jupyter notebooks.
              </p>
              <ul className="list-inside list-disc text-lg text-accent-dark mt-3">
                <li>
                  Project report{" "}
                  <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/bachelor-thesis.pdf">
                    here!
                  </Hyperlink>
                </li>
                <li className="text-primary hover:opacity-50">
                  Click for abstract
                </li>
              </ul>
            </div>
          }
        >
          <StaticImage
            src="../images/dataframe-graph.png"
            className="my-5 mx-5 float-right"
          />
          <p className="text-accent-dark pt-5 text-lg">
            <b>Abstract. </b>Availability of data at extensive scales has led to
            the adoption of data-driven decision making practices in several
            domains including the likes of medicine, finance, and public policy.
            Consequently, ensuring correctness and fairness of analyses drawn
            from data science programs is critical and presents a challenging
            verification task. Errors in data processing code often go unnoticed
            since they do not throw errors, and can lead to unsound conclusions
            being drawn from data. We propose an abstract interpretation based
            static analysis tool as a first step towards analysing data science
            programs. To this end, we construct a novel abstract domain to track
            data transformations which we exploit towards the task of shape
            inference of input data. Our tool is capable of automatically
            inferring the constraints and assumptions placed by a program on the
            input data. This can be further used towards achieving bigger
            objectives like input data usage analysis, data provenance, and the
            detection of bias or skew introduced in the data by a program.
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div>
              <h4 className="text-secondary text-2xl mt-4 hover:opacity-50">
                Accounting for communication delays in a hybrid system (June
                2021 - December 2021)
              </h4>
              <p className="text-accent-dark pt-2 text-lg">
                Worked under{" "}
                <Hyperlink href="http://www.sergiomover.eu/">
                  Prof. Sergio Mover
                </Hyperlink>{" "}
                with the{" "}
                <Hyperlink href="http://www.lix.polytechnique.fr/cosynus/">
                  Cosynus team
                </Hyperlink>{" "}
                at{" "}
                <Hyperlink href="https://www.lix.polytechnique.fr/">
                  LIX
                </Hyperlink>{" "}
                (computer science department at Ecole Polytechnique) on handling
                communication delays which arise when there are multiple hybrid
                systems interacting with each other.
              </p>
              <ul className="list-inside list-disc text-lg text-accent-dark mt-3">
                <li>
                  Slides{" "}
                  <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/communication-delays-cps.pdf">
                    here.
                  </Hyperlink>{" "}
                  A (re-)recording of the talk is{" "}
                  <Hyperlink href="https://youtu.be/mUKBk0PEpVs">
                    here!
                  </Hyperlink>
                </li>
                <li>
                  Project report{" "}
                  <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf">
                    here
                  </Hyperlink>
                  .
                </li>
                <li className="text-primary hover:opacity-50">
                  Click for abstract
                </li>
              </ul>
            </div>
          }
        >
          <StaticImage
            src="../images/drones-safe-nav.png"
            className="my-5 mx-5 float-right"
          />
          <p className="text-accent-dark pt-5 text-lg">
            <b>Abstract. </b>Cyber-physical systems use communication protocols
            to gather information on their environments in order to react to
            changes around them. However, in practice these protocols are far
            from perfect and can have non-negligible delays in relaying state
            information, i.e., there might be a delay in observing the current
            value of a state variable. To further motivate the study of these
            delays, we explore the case study of a collision avoidance protocol
            with a group of robots navigating in space while avoiding
            collisions. Here, we cannot ensure that each robot has complete
            information about the state of the other robots at every instant of
            time. To model these delays, we revisit the class of hybrid automata
            called lazy hybrid automata in the continuous, instead of discrete,
            semantic. Lazy hybrid automata model nondeterministic delays in
            observing the value of state variables used in invariants and guard
            conditions. We then discuss the results we have obtained on the
            expressiveness of some restricted classes of (continuous) lazy
            hybrid automata by providing their translations into classical
            hybrid automata.
          </p>
        </Collapsible>
        <h3 className="text-primary text-4xl mt-8">Software Development</h3>
        <p className="text-accent-dark pt-5 text-lg">
          In my free time I love getting involved in software development and
          over the years, I have dabbled with multiple frontend and backend
          development frameworks. Some of my favorites are Django, React, React
          Native, Vue.js, and Android!
        </p>
        <h4 className="text-secondary text-2xl mt-4" id="anemone">
          Anemone (October 2020 - Present)
        </h4>
        <p className="text-accent-dark pt-5 text-lg">
          For over a year, I have been working with 4 other motivated friends
          (who also happen to be brilliant entrepreneurs) from my university on
          building Anemone: a socio-professional networking platform tailor-made
          to the needs of the artistic and cultural industries! I lead the
          development team at Anemone. Find the app on the French App Store and
          Play Store. Check out our{" "}
          <Hyperlink href={"https://www.anemone.paris/"}>website</Hyperlink>!
        </p>
        <center>
          <StaticImage
            src="../images/dessinavecanemone.png"
            className="mt-5 w-96"
          />
        </center>
      </div>
    </main>
  );
};

export default IndexPage;
