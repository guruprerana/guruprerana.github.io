import { Link } from "gatsby";
import * as React from "react";

function Hyperlink({ href, children, samePage = false, className }) {
  if (samePage) {
    return (
      <Link to={href} className={`text-primary hover:opacity-50 ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={!samePage && "_blank"}
      rel="noopener noreferrer"
      className={`text-primary hover:opacity-50 ${className}`}
    >
      {children}
    </a>
  );
}

export default Hyperlink;
