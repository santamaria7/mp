import React from "react";
import "./App.css";
import { Button, Form, FormWrapper, H1, Page, Error } from "../design";
import InputComponent from "../InputComponent";
import { useForm } from "../../hooks/useForm";

function App() {
  const {onSubmit, errors} = useForm();
  return (
    <Page>
      <FormWrapper>
        <H1>Connect With Your MP</H1>
        <Form onSubmit={onSubmit}>
          <InputComponent  label="First Name:" type="text" required title="Enter Your First Name Please"/>
          <Error>{errors.firstName}</Error>
          <InputComponent  label="Last Name:" type="text" required title="Enter Your Last Name Please" />
          <Error>{errors.lastName}</Error>
          <InputComponent  label="Email:" type="email" required title="Enter Your Email Please"/>
          <Error>{errors.email}</Error>
          <InputComponent  label="Postal Code:" type="text" pattern="[0-9]" required title="Enter Your Postal Code Please"/>
          <Error>{errors.postalCode}</Error>
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
    </Page>
  );
}

export default App;
