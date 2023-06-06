import { ChangeEvent, FormEvent } from "react";
import { FormWrapper } from "../formWrapper/index.js";
import * as S from "../styles.js";

type UserData = {
  name: string,
  email: string,
  phone: string,
}

type PersonalFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export const PersonalInfoStep = ({ name, email, phone, updateFields }: PersonalFormProps) => {
  const formatPhoneNumber = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");
  
    let formattedValue = "";
    const match = numericValue.match(/^(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,4})$/);
  
    if (match) {
      formattedValue = `+${match[1]}${match[2] ? " " + match[2] : ""}${match[3] ? " " + match[3] : ""}${match[4] ? " " + match[4] : ""}`;
    }
  
    return formattedValue;
  };
  
  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    return updateFields({ phone: formattedValue });
  }

  return (
    <FormWrapper 
      title="Personal info"
      isColumn={true}
      subtitle="Please provide your name, email address, and phone number."
    >
      <S.Label>Name</S.Label>
      <S.Input 
        autoFocus 
        type="text" 
        value={name}
        placeholder="e.g. Stephen King"
        onChange={(e: FormEvent<HTMLInputElement>) => updateFields({ name: e.target.value })}
      />
      <S.Label>E-mail</S.Label>
      <S.Input 
        type="email"
        value={email}
        placeholder="e.g. stephenking@lorem.com"
        onChange={(e: FormEvent<HTMLInputElement>) => updateFields({ email: e.target.value })}
      />
      <S.Label>Phone Number</S.Label>
      <S.Input
        type="text"
        value={phone}
        placeholder="e.g. +1 234 567 890"
        onChange={handleChangePhone}
      />
    </FormWrapper>
  )
}