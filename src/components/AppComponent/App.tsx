import React from "react";
import "./App.css";
import { Button, Form, FormWrapper, H1, Page } from "../design";
import InputComponent from "../InputComponent";

function App() {
  return (
    <Page>
      <FormWrapper>
        <H1>Connect With Your MP</H1>
        <Form>
          <InputComponent  label="First Name:" type="text" />
          <InputComponent  label="Last Name:" type="text" />
          <InputComponent  label="Email:" type="email" />
          <InputComponent  label="Postal Code:" type="text" pattern="[0-9]"/>
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
    </Page>
  );
}

export default App;
