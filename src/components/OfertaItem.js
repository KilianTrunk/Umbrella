import * as React from "react";

export const OfertaItem = ({ link, title }) => {
  return (
    <div
      className="oferta-img vertical-center"
      style={{ backgroundImage: "url(" + link }}
    >
      <p className="oferta-title">{title}</p>
    </div>
  );
};
