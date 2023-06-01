import { useEffect, useState } from "react";

const monthlyPrices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
  "online-service":1,
  "larger-storage": 2,
  "customizable-profile": 2,
};

const yearlyPrices = {
  arcade: 90,
  advanced: 120,
  pro: 150,
  "online-service": 10,
  "larger-storage": 20,
  "customizable-profile": 20,
}

export const usePrices = (planType: string) => {
  const [priceObj, setPriceObj] = useState(monthlyPrices);

  useEffect(() => {
    if (planType === "yearly") {
      setPriceObj(yearlyPrices);
    } else {
      setPriceObj(yearlyPrices);
    }
  }, [planType]);

  return priceObj;
}