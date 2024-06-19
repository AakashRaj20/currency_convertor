import { createContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

const getRandomVariation = (value) => {
  const variation = value * 0.03;
  //console.log(value);
  const max = value + variation;
  const min = value - variation;
  const randomChange = Math.random() * (max - min) + min;
  return randomChange;
};

const CurrencyProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState({
    eur_usd: 1.05,
    usd_inr: 80.05,
    aud_usd: 0.67,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies(() => ({
        eur_usd: getRandomVariation(currencies.eur_usd),
        usd_inr: getRandomVariation(currencies.usd_inr),
        aud_usd: getRandomVariation(currencies.aud_usd),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CurrencyContext.Provider value={currencies}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyContext, CurrencyProvider };
