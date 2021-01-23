import React, { ChangeEvent, FormEvent, useState } from "react";
import { requestMP } from "../api";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
};

export function useForm() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
  });
  const [error, setError] = useState<string>("");

  const [sending, setSending] = useState<boolean>(false);

  function modifyValues(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function requestData() {
    setSending(true);
    try {
      const res = await requestMP(values.postalCode);
      setSending(false);
      console.log(res);
    } catch (error) {
      setSending(false);
      console.log(error);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    values.postalCode !== ""
      ? requestData()
      : setError("Please enter a valid postal code");
  }

  return {
    onSubmit,
    values,
    setValues,
    error,
    sending,
    modifyValues,
  };
}
