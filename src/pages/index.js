import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMastodon,
  faTwitter,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Hyperlink from "../components/Hyperlink";
import News from "../components/News";
import Research from "../components/Research";
import Publications from "../components/Publications";
import Screen from "../components/Screen";
import Latex from "react-latex";

const IndexPage = () => {
  return (
    <Screen>
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
            ...you can call me <b className="text-primary font-normal">Guru!</b>
          </h2>
          <h2 className="inline text-2xl md:text-3xl text-accent-dark font-medium mt-3">
            PhD student at University of Pennsylvania
          </h2>
          <div className="mt-4 flex flex-row justify-center items-center">
            <Hyperlink
              href="https://github.com/guruprerana/cv/raw/master/shabadi.pdf"
              className="text-3xl"
            >
              CV
            </Hyperlink>
            <Hyperlink href="mailto:lastname@seas.upenn.edu">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="hover:opacity-50 ml-2"
              />
            </Hyperlink>
            <Hyperlink href="https://bsky.app/profile/shabadi.bsky.social">
              <FontAwesomeIcon
                icon={faBluesky}
                size="2x"
                className="ml-2 hover:opacity-50"
              />
            </Hyperlink>
            <Hyperlink href="https://twitter.com/guruprerana">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="ml-2 hover:opacity-50"
              />
            </Hyperlink>
            <Hyperlink href="https://types.pl/@guru">
              <FontAwesomeIcon
                icon={faMastodon}
                size="2x"
                className="ml-2 hover:opacity-50"
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
        I am a PhD student at the University of Pennsylvania where I am advised
        by{" "}
        <Hyperlink href="https://www.cis.upenn.edu/~alur/">
          Rajeev Alur
        </Hyperlink>
        . I previously graduated from École Polytechnique with bachelor's and
        master's degrees in mathematics and computer science. My set of core
        research interests is spanned by the following grammar:
      </p>
      <p className="text-accent-dark text-md overflow-x-auto">
        <Latex displayMode>
          {
            "$$ \\Phi \\Coloneqq \\hspace{0.2cm} \\varphi \\hspace{0.2cm} \\textit{    for    } \\hspace{0.2cm} \\varphi \\hspace{0.2cm} $$ $$ \\\\ \\varphi \\Coloneqq \\text{ synthesis } \\mid \\text{ verification }  \\mid \\text{ AI } \\mid \\text{ automation }$$"
          }
        </Latex>
      </p>
      <p className="text-accent-dark pt-1 text-lg">
        As a result, I am also interested in all topics that play a role in
        these domains including (but not restricted to) logic, model checking,
        reinforcement learning, game theory, control, cyber-physical systems,
        PL, Bayesian optimization, and a bunch more!{" "}
      </p>
      <p className="text-accent-dark pt-1 text-lg">
        During my undergrad and masters, I had the honor and pleasure of working
        with:{" "}
        <Hyperlink href={"https://alessiomansutti.github.io/"}>
          Alessio Mansutti
        </Hyperlink>{" "}
        on optimization in integer linear-exponential programs at the IMDEA
        Software Institute in Madrid, Spain
        <Hyperlink href="#" className="ml-1">
          (SODA'26)
        </Hyperlink>
        ;{" "}
        <Hyperlink href={"https://games-automata-play.com/"}>
          Nathanaël Fijalkow
        </Hyperlink>{" "}
        on programmatic reinforcement learning{" "}
        <Hyperlink href="https://arxiv.org/abs/2402.11650" className="ml-1">
          (GenPlan'25)
        </Hyperlink>{" "}
        at the University of Warsaw; and{" "}
        <Hyperlink href="https://caterinaurban.github.io/">
          Caterina Urban
        </Hyperlink>{" "}
        on building an abstract interpretation based tool to verify data science
        Jupyter notebooks
        <Hyperlink
          href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf"
          className="ml-1"
        >
          (SOAP'23)
        </Hyperlink>{" "}
        at ENS Ulm, Paris. And I started my journey in the world of formal
        methods research working with{" "}
        <Hyperlink href="http://www.sergiomover.eu/">Sergio Mover</Hyperlink> on
        handling communication delays arising in cyber-physical systems at École
        Polytechnique, Paris.
      </p>
      {/* <p className="text-accent-dark pt-2 text-lg">
        {" "}
        I am currently an intern at IMDEA Software Institute, Madrid working
        with{" "}
        <Hyperlink href={"https://alessiomansutti.github.io/"}>
          Alessio Mansutti
        </Hyperlink>{" "}
        on arithmetic logic. Previously, I worked with{" "}
        <Hyperlink href={"https://games-automata-play.com/"}>
          Nathanaël Fijalkow
        </Hyperlink>{" "}
        on worked on synthesizing programmatic policies for (a small subset of)
        markov decision processes (MDPs) starting from programmatic
        representations of these MDPs (visualized by some{" "}
        <Hyperlink samePage href={"/smol-strats"}>
          cool animations
        </Hyperlink>
        ). Before that, I worked with{" "}
        <Hyperlink href="https://caterinaurban.github.io/">
          Caterina Urban
        </Hyperlink>{" "}
        on building a abstract interpretation based tool to verify data science
        Jupyter notebooks{" "}
        <Hyperlink
          href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf"
          className="ml-1"
        >
          (SOAP'23)
        </Hyperlink>
        . And I started my journey in the world of formal methods research
        working with{" "}
        <Hyperlink href="http://www.sergiomover.eu/">Sergio Mover</Hyperlink> on
        handling communication delays arising in cyber-physical systems. More
        info on all these works below! A cheesy long term goal of mine is to
        build a world in which autonomous systems are both omnipresent and
        guaranteed to be safe, and where automation drives the march towards
        sustainable development.{" "}
      </p>
      <p className="text-accent-dark pt-2 text-lg">
        {" "}
        When I am not verifying programs/autonomous systems around me, I dabble
        in software development and I am currently working with a team of 4
        brilliant innovators on building{" "}
        <Hyperlink samePage href="#anemone">
          Anemone
        </Hyperlink>
        ! Lastly, education is something I am deeply passionate about and a long
        term goal of mine is to work on improving computer science education and
        outreach.
      </p> */}
      <News />
      <Publications />
      {/* <Research /> */}
      {/* <h3 className="text-primary text-4xl mt-8">Software Development</h3>
      <p className="text-accent-dark pt-5 text-lg">
        In my free time I like dabbling in software development.
      </p>
      <h4 className="text-secondary text-2xl mt-4" id="anemone">
        Anemone (October 2020 - Present)
      </h4>
      <p className="text-accent-dark pt-5 text-lg">
        Over the past couple of years, I have been working with 4 other
        motivated friends (who also happen to be brilliant entrepreneurs) from
        my university on building Anemone: a socio-professional networking
        platform tailor-made to the needs of the artistic and cultural
        industries! I lead the development team at Anemone. Find the app on the
        French App Store and Play Store. Check out our{" "}
        <Hyperlink href={"https://www.anemone.paris/"}>website</Hyperlink>!
      </p>
      <center>
        <StaticImage
          src="../images/dessinavecanemone.png"
          className="mt-5 w-96"
        />
      </center> */}
    </Screen>
  );
};

export default IndexPage;
