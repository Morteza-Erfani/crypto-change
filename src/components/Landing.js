import React, { useEffect, useState } from 'react';

// Functions
import { getCoins } from '../services/api';

const Landing = () => {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins()
      console.log(data)
      setCoins(data)
    }

    fetchAPI()
  },[])

  return (
    <div>
      Landing
    </div>
  );
};

export default Landing;