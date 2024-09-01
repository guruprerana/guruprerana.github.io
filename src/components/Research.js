import * as React from "react";
import Collapsible from "react-collapsible";
import Hyperlink from "./Hyperlink";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function Research() {
  return (
    <>
      <h3 className="text-primary text-4xl pt-8">Research Experience</h3>
      <div>
        <h4 className="text-secondary text-2xl mt-4 hover:opacity-50">
          Integer linear-exponential programming (April 2024 - August 2024)
        </h4>
        <p className="text-accent-dark pt-5 text-lg">
          Working with{" "}
          <Hyperlink href={"https://alessiomansutti.github.io/"}>
            Alessio Mansutti
          </Hyperlink>{" "}
          at IMDEA Software Institute, Madrid on an optimization procedure for
          integer linear-exponential systems.
        </p>
      </div>
      <div>
        <h4 className="text-secondary text-2xl mt-4 hover:opacity-50">
          <Link to="/smol-strats">
            Programmatic Reinforcement Learning (April 2023 - August 2023)
          </Link>
        </h4>
        <p className="text-accent-dark pt-5 text-lg">
          Worked with{" "}
          <Hyperlink href={"https://games-automata-play.com/"}>
            Nathanaël Fijalkow
          </Hyperlink>{" "}
          at the{" "}
          <Hyperlink
            href={
              "https://www.mimuw.edu.pl/en/dziedziny-badan/teoria-automatow"
            }
          >
            automata theory group
          </Hyperlink>{" "}
          of the University of Warsaw on synthesizing programmatic policies for
          markov decision processes (MDPs) by exploiting programmatic
          representations of MDPs.
        </p>
        <div className="flex flex-row text-lg mt-1">
          <Hyperlink
            className="ml-1"
            href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/popl24src.pdf"
          >
            [PDF]
          </Hyperlink>
          <Hyperlink className="ml-1" samePage href={"/smol-strats"}>
            [Abstract and some animations]
          </Hyperlink>
        </div>
      </div>
      <Collapsible
        trigger={
          <div>
            <h4 className="text-secondary text-2xl mt-4 hover:opacity-50">
              Bachelor thesis: Static analysis of data science software (January
              2022 - April 2022)
            </h4>
            <p className="text-accent-dark pt-5 text-lg">
              Worked with{" "}
              <Hyperlink href="https://caterinaurban.github.io/">
                Caterina Urban
              </Hyperlink>{" "}
              at the{" "}
              <Hyperlink href="https://team.inria.fr/antique/">
                ANTIQUE team
              </Hyperlink>{" "}
              of <Hyperlink href="https://www.ens.fr/">ENS, Paris</Hyperlink> on
              the design of abstractions to facilitate static analysis of
              Jupyter notebooks used for data science.
            </p>
            <div className="flex flex-row text-lg mt-1">
              <Hyperlink
                href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf"
                className="ml-1"
              >
                [Paper]
              </Hyperlink>
              <Hyperlink
                href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/slides-data-science-notebooks.pdf"
                className="ml-1"
              >
                [Slides]
              </Hyperlink>
              <Hyperlink
                href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/bachelor-thesis.pdf"
                className="ml-1"
              >
                [Thesis]
              </Hyperlink>
              <Hyperlink className="ml-1">[Abstract]</Hyperlink>
            </div>
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
          Consequently, ensuring correctness and fairness of analyses drawn from
          data science programs is critical and presents a challenging
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
              Accounting for communication delays in a hybrid system (June 2021
              - December 2021)
            </h4>
            <p className="text-accent-dark pt-2 text-lg">
              Worked with{" "}
              <Hyperlink href="http://www.sergiomover.eu/">
                Sergio Mover
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
            <div className="flex flex-row text-lg mt-1">
              <Hyperlink href="https://youtu.be/mUKBk0PEpVs" className="ml-1">
                [Talk]
              </Hyperlink>
              <Hyperlink
                href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/slides-lazy-hybrid-automata.pdf"
                className="ml-1"
              >
                [Slides]
              </Hyperlink>
              <Hyperlink
                href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf"
                className="ml-1"
              >
                [Report]
              </Hyperlink>
              <Hyperlink className="ml-1">[Abstract]</Hyperlink>
            </div>
          </div>
        }
      >
        <StaticImage
          src="../images/drones-safe-nav.png"
          className="my-5 mx-5 float-right"
        />
        <p className="text-accent-dark pt-5 text-lg">
          <b>Abstract. </b>Cyber-physical systems use communication protocols to
          gather information on their environments in order to react to changes
          around them. However, in practice these protocols are far from perfect
          and can have non-negligible delays in relaying state information,
          i.e., there might be a delay in observing the current value of a state
          variable. To further motivate the study of these delays, we explore
          the case study of a collision avoidance protocol with a group of
          robots navigating in space while avoiding collisions. Here, we cannot
          ensure that each robot has complete information about the state of the
          other robots at every instant of time. To model these delays, we
          revisit the class of hybrid automata called lazy hybrid automata in
          the continuous, instead of discrete, semantic. Lazy hybrid automata
          model nondeterministic delays in observing the value of state
          variables used in invariants and guard conditions. We then discuss the
          results we have obtained on the expressiveness of some restricted
          classes of (continuous) lazy hybrid automata by providing their
          translations into classical hybrid automata.
        </p>
      </Collapsible>
    </>
  );
}

export default Research;
