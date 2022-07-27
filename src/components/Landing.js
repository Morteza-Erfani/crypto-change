import React, { useEffect, useState } from "react";

// Functions
import { getCoins } from "../services/api";
import Coin from "./Coin";

// Components
import Loader from "./Loader";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      console.log(data);
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
      {coins.length > 0 ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
