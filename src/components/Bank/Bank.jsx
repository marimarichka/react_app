import React, { useEffect, useState, useRef } from "react";
import s from "./Bank.module.css";
import Preloader from "../../SharedComponents/Preloader/Preloader";
import SearchInput from "../Users/SearchInput/SearchInput";

const bankAPI = "https://random-data-api.com/api/v2/banks?size=30";

const Bank = () => {
  const [bankAccounts, setbankAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(bankAPI).then(async (response) => {
      const bankAccounts = await response.json();
      setbankAccounts(bankAccounts);
      setLoading(false);
    });
  }, []);

  const filterBA = bankAccounts.filter((b) => {
    return b.bank_name.toUpperCase().includes(searchValue.toUpperCase());
  });

  const bankTableRef = useRef();

  return (
    <div className={s.bankWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.bankContent}>
        <div
          className={s.bankTable}
          ref={bankTableRef}
          style={{ height: bankTableRef.current?.getBoundingClientRect()?.height }}
        >
          <div className={s.bankHeader}>
            {["Bank Name", "Iban", "Account number", "Swift BIC"].map((name) => (
              <div>{name}</div>
            ))}
          </div>
          <div className={s.bankBody}>
            {loading ? (
              <Preloader />
            ) : (
              filterBA.map(({ bank_name, iban, account_number, swift_bic }) => (
                <div className={s.oneBA}>
                  <div>{bank_name}</div>
                  <div>{iban}</div>
                  <div>{account_number}</div>
                  <div>{swift_bic}</div>
                </div>
              ))
            )}
          </div>
          <div className={s.hiddenDiv}></div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
