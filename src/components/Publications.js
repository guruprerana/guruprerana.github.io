import * as React from "react";
import Hyperlink from "./Hyperlink";

const data = [
  {
    name: "Risk-Sensitive Agent Compositions",
    authors: "Guruprerana Shabadi and Rajeev Alur",
    paperLink: "https://arxiv.org/abs/2506.04632",
    venue: "Preprint",
    links: [
      {
        name: "PDF",
        url: "https://arxiv.org/abs/2506.04632"
      }
    ],
    year: 2025
  },
  {
    name: "Optimization Modulo Integer Linear-Exponential Programs",
    authors: "S Hitarth, Alessio Mansutti, Guruprerana Shabadi",
    paperLink: "http://arxiv.org/abs/2510.14550",
    venue: "SODA 2026",
    links: [
      {
        name: "PDF",
        url: "http://arxiv.org/abs/2510.14550"
      }
    ],
    year: 2025
  },
  {
    name: "Programmatic Reinforcement Learning: Navigating Gridworlds",
    authors: "Guruprerana Shabadi, Nathanaël Fijalkow, Théo Matricon",
    paperLink: "https://arxiv.org/abs/2402.11650",
    venue: "Generalization in Planning (GenPlan) Workshop, AAAI 2025",
    links: [
      {
        name: "PDF",
        url: "https://arxiv.org/abs/2402.11650"
      }
    ],
    year: 2024
  },
  {
    name: "Static Analysis of Data Transformations in Jupyter Notebooks",
    authors: "Luca Negrini, Guruprerana Shabadi, and Caterina Urban",
    paperLink:
      "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf",
    venue: "SOAP Workshop, PLDI 2023",
    links: [
      {
        name: "PDF",
        url: "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf",
      },
    ],
    year: 2023,
  },
];

function Publications() {
  return (
    <>
      <h3 className="text-primary text-4xl mt-8">Publications</h3>
      <div className="pr-2 mt-3">
        <ul className="list-inside text-lg text-accent-dark">
          {data.map((item) => (
            <li>
              {item.paperLink ? (
                <Hyperlink href={item.paperLink} className="text-secondary">
                  {item.name}.
                </Hyperlink>
              ) : (
                <p className="text-secondary inline">{item.name}.</p>
              )}{" "}
              {item.authors}. <i>{item.venue}.</i>
              {item.links.map((link) => (
                <Hyperlink href={link.url}> [{link.name}]</Hyperlink>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Publications;
