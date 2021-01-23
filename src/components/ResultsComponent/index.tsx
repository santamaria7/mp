import React from "react";
import Member from "../Member";
import { Credit, ResultsWrapper } from "../design";

const ResultsComponent: React.FC<ResultsProps> = ({ results }) => {
  return (
      <>
          <ResultsWrapper>
          {results.map((item, index) => {
              return <Member item={item} key={`${item.name}-${index}`}/>;
          })}

      </ResultsWrapper>
          <Credit>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Credit>
      </>
  );
};

export default ResultsComponent;
