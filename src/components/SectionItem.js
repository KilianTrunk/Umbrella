import * as React from "react";

import { Col } from "react-flexbox-grid";

export const SectionItem = ({ sectionItem }) => {
  return (
    <>
      <div className="zalety-header">{sectionItem.header}</div>
      <div className="zalety-description">{sectionItem.description}</div>
    </>
  );
};
