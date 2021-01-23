import React from "react";
import "./App.css";
import { Button, Form, FormWrapper, H1, Page, Error } from "../design";
import InputComponent from "../InputComponent";
import { useForm } from "../../hooks/useForm";

function App() {
  const {onSubmit, error} = useForm();
  return (
    <Page>
      <FormWrapper>
        <H1>Connect With Your MP</H1>
        <Form onSubmit={onSubmit}>
          <InputComponent  label="First Name:" type="text" title="Enter Your First Name Please"/>
          <InputComponent  label="Last Name:" type="text" title="Enter Your Last Name Please" />
          <InputComponent  label="Email:" type="email" title="Enter Your Email Please"/>
          <InputComponent  label="Postal Code:" type="text" required title="Enter The Postal Code Please"/>
          <Error>{error}</Error>
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
    </Page>
  );
}

export default App;
