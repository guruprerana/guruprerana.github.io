import * as React from "react";
import { Helmet } from "react-helmet";

function Screen({ children, title = "Guru Shabadi", className }) {
  return (
    <main className="bg-accent text-justify">
      <Helmet>
        <title>{title}</title>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div className={`container max-w-2xl mx-auto px-5 ${className}`}>
        {children}
      </div>
    </main>
  );
}

export default Screen;
