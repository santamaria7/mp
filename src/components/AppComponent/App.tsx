import React from "react";
import "./App.css";
import { Page } from "../design";
import { useForm } from "../../hooks/useForm";
import FormComponent from "../FormComponent";
import ResultsComponent from "../ResultsComponent";

function App() {
  const { onSubmit, values, error, modifyValues, results } = useForm();
  return (
    <Page>
      {results.length === 0 ? (
        <FormComponent
          onSubmit={onSubmit}
          values={values}
          error={error}
          modifyValues={modifyValues}
        />
      ) : (
        <ResultsComponent results={results} />
      )}
    </Page>
  );
}

export default App;
