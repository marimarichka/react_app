import React, { useState } from "react";
import s from "./Cards.module.css";
import SearchInput from "../Users/SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";
import { useGetCardsQuery } from "../../redux/API/API";

const Cards = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetCardsQuery('30');

  const filterCI = (data || []).filter((n) => n.credit_card_number.toUpperCase().includes(searchValue.toUpperCase()));

  return (
    <div className={s.cardsWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.cardsContent}>
        <Table
          loading={isLoading}
          data={filterCI}
          header={["Card number", "Expire date", "Type"]}
          keys={["credit_card_number", "credit_card_expiry_date", "credit_card_type"]}
        />
      </div>
    </div>
  );
};

export default Cards;
