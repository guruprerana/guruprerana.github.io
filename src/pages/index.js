import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faC } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import Hyperlink from "../components/Hyperlink";
import Collapsible from "react-collapsible";
import News from "../components/News";
import { Link } from "gatsby";
import Research from "../components/Research";
import Publications from "../components/Publications";

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
            <div className="mt-4 flex flex-row justify-center items-center">
              <Hyperlink
                href="https://github.com/guruprerana/cv/raw/master/shabadi.pdf"
                className="text-3xl"
              >
                CV
              </Hyperlink>
              <Hyperlink href="mailto:guruprerana.shabadi@polytechnique.edu">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="hover:opacity-50 ml-2"
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
          . A cheesy long term goal of mine is to build a world in which
          autonomous systems are both omnipresent and guaranteed to be safe, and
          where automation drives the march towards sustainable development.
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
        <News />
        <Publications />
        <Research />
        <h3 className="text-primary text-4xl mt-8">Software Development</h3>
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
          industries! I lead the development team at Anemone. Find the app on
          the French App Store and Play Store. Check out our{" "}
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
