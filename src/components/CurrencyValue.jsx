// CurrencyValue.js
import React, { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

const CurrencyValue = () => {
  const currencies = useContext(CurrencyContext);

  return (
    <>
      <div className="bg-blue-700 mx-auto px-8 py-5 space-y-5">
        <h2 className="text-3xl font-bold">Market</h2>
        <table className="table-auto border-2 bg-white">
          <tbody className="border-2">
            <tr className="border-2">
              <td className="border-2 px-10 py-2">EUR/USD</td>
              <td className="border-2 px-10 py-2">
                {currencies.eur_usd.toFixed(4)}
              </td>
            </tr>
            <tr>
              <td className="border-2 px-10 py-2">USD/INR</td>
              <td className="border-2 px-10 py-2">
                {currencies.usd_inr.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="border-2 px-10 py-2">AUD/USD</td>
              <td className="border-2 px-10 py-2">
                {currencies.aud_usd.toFixed(4)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurrencyValue;
