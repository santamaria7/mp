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
  function handleData(data: PostCodeData) {
    console.log(data);
    setResults(data.representatives_centroid);
    setError((prevState) => ({
      ...prevState,
      data: "",
    }));
    setSending(false);
  }

  async function requestData() {
    setSending(true);
    try {
      const res = await requestMPJSONP(values.postalCode);
      handleData(res);
    } catch (error) {
      // In a real world case error handling is done based on the status code of the response.
      // here we only get 404
      setError((prevState) => ({
        ...prevState,
        data: "No Data Found",
      }));
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
    error,
    sending,
    results,
  };
}
