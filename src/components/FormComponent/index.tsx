import { Button, Error, Form, FormWrapper, H1 } from "../design";
import InputComponent from "../InputComponent";
import React, { FormEvent } from "react";
import LoadingIcon from "../LoadingIcon";

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, values, modifyValues, error, sending }) =>{
  return (
    <FormWrapper>
      <H1>Connect With Your MP</H1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <InputComponent
          label="First Name:"
          name="firstName"
          type="text"
          title="Enter Your First Name Please"
          value={values.firstName}
          onChange={modifyValues}
        />
        <InputComponent
          label="Last Name:"
          name="lastName"
          type="text"
          title="Enter Your Last Name Please"
          value={values.lastName}
          onChange={modifyValues}
        />
        <InputComponent
          label="Email:"
          name="email"
          type="email"
          title="Enter Your Email Please"
          value={values.email}
          onChange={modifyValues}
        />
        <InputComponent
          label="Postal Code:"
          name="postalCode"
          type="text"
          required
          title="Enter The Postal Code Please"
          value={values.postalCode}
          onChange={modifyValues}
        />
        <Error>{error.postalCode}</Error>
        <Button type="submit">{sending ? <LoadingIcon />:'Send'}</Button>
        <Error className="data">{error.data}</Error>
      </Form>
    </FormWrapper>
  );
}

export default FormComponent;
