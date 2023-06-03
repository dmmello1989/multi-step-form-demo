import { useState, useEffect } from "react";
import { usePrices } from "../hooks/usePrices";

type Prices = {
  [key: string]: number;
};

type PlanTypeObject = {
  longName: string;
  shortName: string;
  textPrice: string;
};

type SummaryData = {
  addons: string[];
  plan: string;
  planType: string;
};

type AddonObject = {
  text: string;
  id: string;
};

type PriceObject = {
  planPrice: string,
  addonPrice: string[],
  totalPrice: string
}

type SummaryResult = {
  planTypeObject: PlanTypeObject;
  updatedPlanType: string;
  total: number;
  addonsObject: AddonObject[];
  priceObject: PriceObject
};

type UpdateFieldsFunction = (fields: Partial<SummaryData>) => void;

const useSummary = (data: SummaryData, updateFields: UpdateFieldsFunction): SummaryResult => {
  const prices: Prices = usePrices(data.planType);

  const [planTypeObject, setPlanTypeObject] = useState<PlanTypeObject>({ longName: "monthly", shortName: "month", textPrice: "mo" });
  const [updatedPlanType, setUpdatedPlanType] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.planType === "yearly") {
      setPlanTypeObject({ longName: "yearly", shortName: "year", textPrice: "yr" });
      setUpdatedPlanType("monthly");
    } else if (data.planType === "monthly") {
      setPlanTypeObject({ longName: "monthly", shortName: "month", textPrice: "mo" });
      setUpdatedPlanType("yearly");
    }
  }, [data.planType]);

  useEffect(() => {
    const addonPrices = data.addons.reduce((acc, addon) => acc + (prices[addon] || 0), 0);
    const total = prices[data.plan] + addonPrices;
    setTotal(total);
  }, [data.addons, data.plan, prices]);

  const addonsObject = data.addons.map((addon) => {
    const words = addon.split("-");
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const text = capitalizedWords.join(" ");
    return { text, id: addon };
  });

  addonsObject.sort((a, b) => {
    const order = ["online-service", "larger-storage", "customizable-profile"];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });

  const priceObject = {
    planPrice: `$${prices[data.plan]}/${planTypeObject.textPrice}`,
    addonPrice: addonsObject.map((addon) => `+$${prices[addon.id]}/${planTypeObject.textPrice}`),
    totalPrice:  `$${prices[data.plan] + addonsObject.reduce((acc, addon) => acc + prices[addon.id], 0)}/${planTypeObject.textPrice}`,
  };

  return {
    planTypeObject,
    updatedPlanType,
    addonsObject,
    priceObject,
    total,
  };
};

export default useSummary;
