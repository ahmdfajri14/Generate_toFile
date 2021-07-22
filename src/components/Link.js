import React from "react";

const Link = ({ link,  generateFile}) => {
  return (
    <p data-testid="link-text">
      Link:{" "}
      {!link ? null : (
        <a
          data-testid="link-url"
          onClick={generateFile}
          style={{ textDecoration: "none" }}
        >
          click to download.
        </a>
      )}
    </p>
  );
};

export default Link;
