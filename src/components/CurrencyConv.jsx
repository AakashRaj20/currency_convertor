import React, { useState, useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";
import Result from "./Result";

function CurrencyConverter() {
  const currencies = useContext(CurrencyContext);
  const [srcOption, setSrcOption] = useState("");
  const [tarOption, setTarOption] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handleExchange = () => {
    let newResult = 0;
    const exchangeKey = `${srcOption}_${tarOption}`;
    console.log(tarOption);
    console.log(currencies);
    console.log(exchangeKey);
    switch (exchangeKey) {
      case "inr_usd":
        newResult = amount / currencies.usd_inr;
        break;
      case "usd_inr":
        newResult = amount * currencies.usd_inr;
        break;
      case "usd_aud":
        newResult = amount * currencies.aud_usd;
        break;
      case "aud_usd":
        newResult = amount / currencies.aud_usd;
        break;
      case "usd_eur":
        newResult = amount / currencies.eur_usd;
        break;
      case "eur_usd":
        newResult = amount * currencies.eur_usd;
        break;
      case "inr_aud":
        newResult = (amount / currencies.usd_inr) * currencies.aud_usd;
        break;
      case "aud_inr":
        newResult = (amount / currencies.aud_usd) * currencies.usd_inr;
        break;
      case "inr_eur":
        newResult = (amount / currencies.usd_inr) * currencies.eur_usd;
        break;
      case "eur_inr":
        newResult = (amount / currencies.eur_usd) * currencies.usd_inr;
        break;
      case "aud_eur":
        newResult = (amount / currencies.aud_usd) * currencies.eur_usd;
        break;
      case "eur_aud":
        newResult = (amount / currencies.eur_usd) * currencies.aud_usd;
        break;
      default:
        newResult = amount;
        break;
    }

    setResult(newResult.toFixed(2));
  };

  return (
    <>
      <div className="mx-auto space-y-5 bg-gray-400 py-5 px-4 md:px-16 ">
        <h3 className="text-3xl font-bold text-center">Currency Convertor</h3>
        <label className="flex flex-col text-lg text-start">
          Source Currency
          <select
            className="p-2"
            value={srcOption}
            onChange={(e) => setSrcOption(e.target.value)}
          >
            <option value="">select source currency</option>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="eur">EUR</option>
          </select>
        </label>

        <label className="flex flex-col text-lg">
          Target Currency
          <select
            className="p-2"
            value={tarOption}
            onChange={(e) => setTarOption(e.target.value)}
          >
            <option value="">select target currency</option>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="eur">EUR</option>
          </select>
        </label>
        <label className="flex flex-col text-xl">
          Amount:
          <input
            className="p-2"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <Result res={result} />
        <div className="text-center">
          <button
            className="rounded-md bg-white px-3 py-2 text-lg font-medium"
            onClick={handleExchange}
          >
            Exchange
          </button>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
