import * as React from "react";
import Hyperlink from "./Hyperlink";

const data = [
  {
    name: "Towards programmatic reinforcement learning: the case of deterministic gridworlds",
    authors: "Guruprerana Shabadi",
    paperLink:
      "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/popl24src.pdf",
    venue: "Student research competition at POPL 2024",
    links: [
      {
        name: "PDF",
        url: "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/popl24src.pdf",
      },
    ],
    year: 2024,
  },
  {
    name: "Static Analysis of Data Transformations in Jupyter Notebooks",
    authors: "Luca Negrini, Guruprerana Shabadi, and Caterina Urban",
    paperLink:
      "https://github.com/guruprerana/guruprerana.github.io/raw/source/static/soap2023.pdf",
    venue: "At SOAP workshop at PLDI 2023",
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
