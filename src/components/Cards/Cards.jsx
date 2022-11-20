import React, { useEffect, useState } from "react";
import s from "./Cards.module.css";
import SearchInput from "../Users/SearchInput/SearchInput";
import Table from "../../SharedComponents/Table/Table";

const cardsAPI = "https://random-data-api.com/api/v2/credit_cards?size=30";

const Cards = () => {
  const [cardInformation, setcardInformation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(cardsAPI).then(async (response) => {
      const cardInformation = await response.json();
      setcardInformation(cardInformation);
      setLoading(false);
    });
  }, []);

  const filterCI = cardInformation.filter((n) => {
    return n.credit_card_number.toUpperCase().includes(searchValue.toUpperCase());
  });

  return (
    <div className={s.cardsWrapper}>
      <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={s.cardsContent}>
        <Table
          loading={loading}
          data={filterCI}
          header={["Card number", "Expire date", "Type"]}
          keys={["credit_card_number", "credit_card_expiry_date", "credit_card_type"]}
        />
      </div>
    </div>
  );
};

export default Cards;
