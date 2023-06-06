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
  addons: [],
};

export const useFormData = (): [FormData, Partial<FormData>, (fields: Partial<FormData>) => void] => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const updateFields = (fields: Partial<FormData>) => {
    const updatedData = { ...data, ...fields };
    const updatedErrors: Partial<FormData> = {};

    // Realizar validação dos campos obrigatórios
    if (!updatedData.name) {
      updatedErrors.name = "Name is required";
    }

    if (!updatedData.email) {
      updatedErrors.email = "Email is required";
    }

    if (!updatedData.phone) {
      updatedErrors.phone = "Phone is required";
    }

    if (!updatedData.plan) {
      updatedErrors.plan = "Plan is required";
    }

    if (!updatedData.planType) {
      updatedErrors.planType = "Plan Type is required";
    }

    // Atualizar os dados e os erros de validação
    setData(updatedData);
    setErrors(updatedErrors);
  };

  console.log("data [useFormData]: ", data);

  return [data, errors, updateFields];
};
