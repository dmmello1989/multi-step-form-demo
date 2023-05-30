import { useState } from "react";
import { FormWrapper } from "../formWrapper/index.js";
import IconCheck from "../../../assets/icon-checkmark.svg";
import * as S from "../styles.js";

type AddonsProps = {
  planType: string,
  addons: string[]
};

type AddonsFormProps = AddonsProps & {
  updateFields: (fields: Partial<AddonsProps>) => void
};

const ADDONS = [
  {
    id: "online-service",
    title: "Online service",
    text: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20
  },
  {
    id: "customizable-profile",
    title: "Customizable profile",
    text: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20
  },
];

export const AddonsStep = ({ planType, addons, updateFields }: AddonsFormProps) => {
  const [selectedAddons , setSelectedAddons] = useState<string[]>([]);

  console.log({planType})

  const handleAddonSelection = (addon: string) => {
    console.log("função handleAddonSelection: ", addon)
    const updatedAddons = selectedAddons.includes(addon)
      ? selectedAddons.filter((item) => item !== addon)
      : [...selectedAddons, addon];

    setSelectedAddons(updatedAddons);
    updateFields({ addons: updatedAddons});
  };

  return (
    <FormWrapper
      isColumn
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      {ADDONS.map(addon => {
        // const handlePriceCard = planType === "monthly" ? `$${addon.priceMonthly}/mo` : `$${addon.priceYearly}/yr`;
        const handlePriceAddon = null;
        const isSelected = selectedAddons.includes(addon.id)

        return (
          // <S.Box isSelected={plan === addon.title} key={`plan-addon-${addon.title}`} onClick={() => setSelectedPlan(addon.title)}>
          <S.AddonBox isSelected={isSelected} key={`addon-${addon.id}`} onClick={() => handleAddonSelection(addon.id)}>
            <S.BoxCheck src={IconCheck} alt="" isSelected={isSelected} />
            <S.AddonTitle>{addon.title}</S.AddonTitle>
            <S.AddonText>{addon.text}</S.AddonText>
            <S.AddonPrice>{handlePriceAddon}</S.AddonPrice>
            <S.HiddenInput
              id={addon.id}
              type="checkbox"
              name={addon.id}
              checked={isSelected}
              onChange={() => handleAddonSelection(addon.id)}
            />
          </S.AddonBox>
        )
      })}


      {/* <S.Label for="larger-storage">Larger storage</S.Label>
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
      /> */}
    </FormWrapper>
  )
}