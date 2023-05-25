import { FormEvent } from "react";
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
  return (
    <FormWrapper 
      title="Personal info"
      isColumn={true}
      subtitle="Please provide your name, email address, and phone number."
    >
      <S.Label>Name</S.Label>
      <S.Input 
      autoFocus 
      required 
      type="text" 
      value={name}
      placeholder="e.g. Stephen King"
      onChange={(e: FormEvent<HTMLInputElement>) => updateFields({ name: e.target.value })}
      />
      <S.Label>E-mail</S.Label>
      <S.Input 
        required
        type="email"
        value={email}
        placeholder="e.g. stephenking@lorem.com"
        onChange={(e: FormEvent<HTMLInputElement>) => updateFields({ email: e.target.value })}
      />
      <S.Label>Phone Number</S.Label>
      <S.Input 
        required
        type="text"
        value={phone}
        placeholder="e.g. +1 234 567 890"
        onChange={(e: FormEvent<HTMLInputElement>) => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  )
}