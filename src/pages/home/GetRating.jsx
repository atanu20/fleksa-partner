import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { apilink } from '../../data/fdata';
import { useEffect } from 'react';
const GetRating = ({ foodid }) => {
  const [ratevalue, setRateValue] = useState('');

  const getratingbyFoodid = async (ffid) => {
    const res = await axios.get(
      `${apilink}/api/v1/user/getratingbyFoodid/${ffid}`
    );
    // console.log(res.data);
    if (res.data.success && res.data?.result.length > 0) {
      setRateValue(res.data.result[0].rating_val);
    }
  };

  useEffect(() => {
    if (foodid) {
      getratingbyFoodid(foodid);
    }
  }, [foodid]);
  return (
    <>
      {ratevalue && (
        <span class="badge badge-warning text-light">
          {ratevalue.toFixed(1)} <i class="bx bxs-star"></i>
        </span>
      )}
    </>
  );
};

export default GetRating;
