import React from "react";
import "./App.css";
import { Button, Form, FormWrapper, H1, Input, Label, Page } from "./components/design";

function App() {
  return (
    <Page>
      <FormWrapper>
        <Form>
          <H1>Connect With Your MP</H1>
          <Label>First Name</Label>
          <Input type="text" />
          <Label>Last Name</Label>
          <Input type="text" />
          <Label>Email</Label>
          <Input type="email" />
          <Label>Password</Label>
          <Input type="password" />
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
    </Page>
  );
}

export default App;
