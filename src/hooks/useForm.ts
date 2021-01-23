import { FormEvent, useState } from "react";
import { requestMP } from "../api";


export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
};
type FormErrorValues = Partial<FormValues>;

export function useForm() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState<FormErrorValues>({});

  const [sending, setSending] = useState<boolean>(false);

  function validateData() {
    const keys = Object.keys(values);
    keys.forEach((k) => {
      if (values[k as keyof FormValues] === "") {
        setErrors((prevState) => ({ ...prevState, [k]: "required" }));
      }
    });
    const errorKeys = Object.keys(errors);
    return errorKeys.length === 0;
  }

  async function requestData(){
    setSending(true);
    try{
      const res = await requestMP(values.postalCode);
      setSending(false);
      console.log(res);
    }
    catch(error){
      setSending(false);
      console.log(error)
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // As we have used the `required` attribute for inputs, we don't need to check manually.
    // but we do the check so in case the user tries to manipulate the inputs,
    // at least we validate the data before sending.
    const isValid = validateData();
    if (isValid) {
      requestData()
    }
  }

  return {
    onSubmit,
    values,
    setValues,
    errors,
    sending,
  };
}
