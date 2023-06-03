import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planType: string;
  addons: string[];
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  planType: "monthly",
  addons: []
};

export const useFormData = (): [FormData, (fields: Partial<FormData>) => void] => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prevState => {
      return { ...prevState, ...fields }
    });
  };

  console.log("data [useFormData]: ", data)

  return [data, updateFields];
};
