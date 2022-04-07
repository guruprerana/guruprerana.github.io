import React from "react";

function Hyperlink({ href, children, samePage = false }) {
  return (
    <a
      href={href}
      target={!samePage && "_blank"}
      rel="noopener noreferrer"
      className="text-primary hover:opacity-50"
    >
      {children}
    </a>
  );
}

export default Hyperlink;
