import { useState } from "react";
import { FormWrapper } from "../formWrapper/index.js";
import * as S from "../styles.js";

type AddonsProps = {
  addons: string[]
};

type AddonsFormProps = AddonsProps & {
  updateFields: (fields: Partial<AddonsProps>) => void
};


export const AddonsStep = ({ addons, updateFields }: AddonsFormProps) => {
  const [selectedAddons , setSelectedAddons] = useState<string[]>([]);

  const handleAddonSelection = (addon: string) => {
    const updatedAddons = selectedAddons.includes(addon)
      ? selectedAddons.filter((item) => item !== addon)
      : [...selectedAddons, addon];

    setSelectedAddons(updatedAddons);
    updateFields({ addons: updatedAddons});
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <S.Box>
        <S.HiddenInput
          type="checkbox"
          id="online-service"
          name="online-service"
          checked={selectedAddons.includes("online-service")}
          onChange={() => handleAddonSelection("online-service")}
        />
      </S.Box>
      <S.Label for="larger-storage">Larger storage</S.Label>
      <S.Input 
        type="checkbox"
        id="larger-storage"
        name="larger-storage"
        checked={selectedAddons.includes("larger-storage")}
        onChange={() => handleAddonSelection("larger-storage")}
      />
      <S.Label for="customizable-profile">Customizable profile</S.Label>
      <S.Input 
        type="checkbox"
        id="customizable-profile"
        name="customizable-profile"
        checked={selectedAddons.includes("customizable-profile")}
        onChange={() => handleAddonSelection("customizable-profile")}
      />
    </FormWrapper>
  )
}