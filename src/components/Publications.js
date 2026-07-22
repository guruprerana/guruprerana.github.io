import * as React from "react";
import Hyperlink from "./Hyperlink";

const sections = [
  {
    heading: "Publications",
    items: [
      {
        name: "Do We Need Frontier Models to Verify Mathematical Proofs?",
        authors: (
          <>
            Aaditya Naik<sup>*</sup>,{" "}
            <strong>
              Guruprerana Shabadi<sup>*</sup>
            </strong>
            , Rajeev Alur, Mayur Naik
          </>
        ),
        venue: "Third Conference on Language Modeling (COLM), 2026",
      },
      {
        name: "Risk-Sensitive Agent Compositions",
        authors: (
          <>
            <strong>Guruprerana Shabadi</strong>, Rajeev Alur
          </>
        ),
        paperLink: "https://arxiv.org/abs/2506.04632",
        venue:
          "International Conference on Learning Representations (ICLR), 2026",
      },
      {
        name: "Optimization Modulo Integer Linear-Exponential Programs",
        authors: (
          <>
            S Hitarth, Alessio Mansutti, <strong>Guruprerana Shabadi</strong>
          </>
        ),
        venue: "ACM-SIAM Symposium on Discrete Algorithms (SODA), 2026",
      },
    ],
  },
  {
    heading: "Preprints",
    items: [
      {
        name: "Auction-Based Online Policy Adaptation for Evolving Objectives",
        authors: (
          <>
            <strong>Guruprerana Shabadi</strong>, Kaushik Mallik
          </>
        ),
        paperLink: "https://arxiv.org/abs/2604.02151",
        venue: "Preprint",
      },
    ],
  },
  {
    heading: "Workshop Papers",
    items: [
      {
        name: "Programmatic Reinforcement Learning: Navigating Gridworlds",
        authors: (
          <>
            <strong>Guruprerana Shabadi</strong>, Nathanaël Fijalkow, Théo
            Matricon
          </>
        ),
        venue: "Generalization in Planning Workshop, AAAI 2025",
      },
      {
        name: "Static Analysis of Data Transformations in Jupyter Notebooks",
        authors: (
          <>
            Luca Negrini, <strong>Guruprerana Shabadi</strong>, Caterina Urban
          </>
        ),
        venue:
          "SOAP, ACM SIGPLAN Conference on Programming Language Design and Implementation, 2023",
      },
    ],
  },
];

function Publications() {
  return (
    <>
      {sections.map((section) => (
        <React.Fragment key={section.heading}>
          <h3 className="text-primary text-4xl mt-8">{section.heading}</h3>
          <div className="pr-2 mt-3">
            <ul className="list-inside text-lg text-accent-dark">
              {section.items.map((item) => (
                <li key={item.name}>
                  {item.authors}.{" "}
                  {item.paperLink ? (
                    <Hyperlink href={item.paperLink} className="text-secondary">
                      {item.name}
                    </Hyperlink>
                  ) : (
                    <span className="text-secondary">{item.name}</span>
                  )}
                  . <i>{item.venue}.</i>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Publications;
