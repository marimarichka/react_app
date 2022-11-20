import React, { useEffect, useState } from "react";
import s from "./Bank.module.css";
import SearchInput from "../Users/SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";

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

  return (
    <div className={s.bankWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.bankContent}>
        <Table
          loading={loading}
          data={filterBA}
          header={["Bank Name", "Iban", "Account number", "Swift BIC"]}
          keys={["bank_name", "iban", "account_number", "swift_bic"]}
        />
      </div>
    </div>
  );
};

export default Bank;
