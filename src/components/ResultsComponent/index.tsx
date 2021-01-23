import React from "react";
import Member from "../Member";
import { ResultsWrapper } from "../design";

const ResultsComponent: React.FC<ResultsProps> = ({ results }) => {
  return (
    <ResultsWrapper>
      {results.map((item, index) => {
        return <Member item={item} key={`${item.name}-${index}`} />;
      })}
    </ResultsWrapper>
  );
};

export default ResultsComponent;
