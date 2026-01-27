import * as React from "react";
import Hyperlink from "./Hyperlink";

const data = [
  {
    date: "January 26, 2026",
    content: (
      <>
        <Hyperlink href={"https://arxiv.org/abs/2506.04632"}>Risk-Sensitive Agent Compositions</Hyperlink> was accepted to ICLR26. See you in Rio!
      </>
    )
  },
  {
    date: "February 14, 2025",
    content: (
      <>
        I will be attending AAAI 2025 in Philly and presenting my work on Programmatic Reinforcement Learning at the GenPlan Workshop.
      </>
    )
  },
  {
    date: "August 27, 2024",
    content: (
      <>
        Moved across the Atlantic to start my PhD at the University of Pennsylvania.
      </>
    ),
  },
  {
    date: "June 2, 2024",
    content: (
      <>
        I attended a{" "}
        <Hyperlink
          href={
            "https://www.dagstuhl.de/seminars/seminar-calendar/seminar-details/24231"
          }
        >
          Dagstuhl seminar on Stochastic Games
        </Hyperlink>
      </>
    ),
  },
  {
    date: "April 1, 2024",
    content: (
      <>
        I started my internship at IMDEA Software Institute, Madrid working with{" "}
        <Hyperlink href={"https://alessiomansutti.github.io/"}>
          Alessio Mansutti
        </Hyperlink>
        . Excited for my next 5 months in Madrid!
      </>
    ),
  },
  {
    date: "September 5, 2023",
    content: (
      <>
        Defended my internship on programmatic reinforcement learning. Find my
        report{" "}
        <Hyperlink
          href={
            "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-m1-internship.pdf"
          }
        >
          here!
        </Hyperlink>{" "}
        I also created some{" "}
        <Hyperlink samePage href={"/smol-strats"}>
          cool animations
        </Hyperlink>{" "}
        of our synthesized policies using manim.
      </>
    ),
  },
  {
    date: "June 6, 2023",
    content: (
      <>
        Our paper{" "}
        <Hyperlink
          href={
            "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf"
          }
        >
          Static Analysis of Data Transformations in Jupyter Notebooks
        </Hyperlink>{" "}
        was accepted at the SOAP workshop at PLDI 2023! This was joint work with
        Luca Negrini and Caterina Urban during my bachelor thesis.
      </>
    ),
  },
  {
    date: "April 3, 2023",
    content: (
      <>
        Moved to Warsaw, Poland to work with{" "}
        <Hyperlink href={"https://games-automata-play.com/"}>
          Nathanaël Fijalkow
        </Hyperlink>{" "}
        at the University of Warsaw to work on programmatic reinforcement
        learning. Looking forward to spending 4 months here discovering a new
        country and an exciting topic!
      </>
    ),
  },
  {
    date: "September 19, 2022",
    content: (
      <>
        Started the Parisian Masters of Research in Computer Science (MPRI) at
        Ecole Polytechnique which is a research oriented master's program in
        theoretical computer science.
      </>
    ),
  },
  {
    date: "September 15, 2022",
    content: (
      <>
        I received the Global Winner in Computer Science award at the{" "}
        <Hyperlink href="https://undergraduateawards.com/winners/global-winners-2022">
          Global Undergraduate Awards
        </Hyperlink>{" "}
        for my work on static analysis of data science software.
      </>
    ),
  },
  {
    date: "June 19, 2022",
    content: (
      <>
        Graduated with a bachelor's degree in mathematics and computer science
        from Ecole Polytechnique with a summa cum laude honor.
      </>
    ),
  },
  {
    date: "April 4, 2022",
    content: (
      <>
        Submitted by bachelor thesis. I worked on verifying data science
        software! Find it{" "}
        <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/bachelor-thesis.pdf">
          here.
        </Hyperlink>
      </>
    ),
  },
  {
    date: "October 11, 2021",
    content: (
      <>
        I presented a talk on my research in hybrid systems at a{" "}
        <Hyperlink href="https://www.lix.polytechnique.fr/~goubault/aid-cieds-2021.html">
          reunion
        </Hyperlink>{" "}
        of researchers from around France working in similar areas which took
        place at{" "}
        <Hyperlink href="https://www.lix.polytechnique.fr/">LIX</Hyperlink>!
        Find my slides{" "}
        <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/communication-delays-cps.pdf">
          here.
        </Hyperlink>{" "}
        A (re-)recording of the talk is{" "}
        <Hyperlink href="https://youtu.be/mUKBk0PEpVs">here!</Hyperlink>
      </>
    ),
  },
  {
    date: "October 1, 2021",
    content: (
      <>
        Find the report of my work on delays in hybrid systems{" "}
        <Hyperlink href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/report-communication-delays.pdf">
          here
        </Hyperlink>
        .
      </>
    ),
  },
];

function News() {
  return (
    <>
      <h3 className="text-primary text-4xl mt-8">What's up with me!</h3>
      <div className="overflow-y-auto pr-2 mt-3" style={{ maxHeight: 250 }}>
        <ul className="list-inside list-disc text-lg text-accent-dark">
          {data.map((item) => (
            <li>
              <b>{item.date}</b>: {item.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default News;
