import React, { FormEvent, useState } from "react";
import { requestMPJSONP } from "../api";

export function useForm() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
  });
  const [error, setError] = useState<ShowErrorType>({});

  const [sending, setSending] = useState<boolean>(false);

  const [results, setResults] = useState<Representative[]>([]);

  function modifyValues(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function handleData(err: Error | null, data: PostCodeData) {
    if (err) {
      setError((prevState) => ({
        ...prevState,
        data: "No Data Found",
      }));
      return;
    }
    setResults(data.representatives_centroid);
  }

  async function requestData() {
    setSending(true);
    try {
      await requestMPJSONP(values.postalCode, handleData);
      setSending(false);
    } catch (error) {
      setSending(false);
      console.log(error);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    values.postalCode !== ""
      ? requestData()
      : setError((prevState) => ({
          ...prevState,
          postalCode: "Please enter a valid postal code",
        }));
  }

  return {
    onSubmit,
    modifyValues,
    values,
    setValues,
    error,
    sending,
    results,
  };
}
