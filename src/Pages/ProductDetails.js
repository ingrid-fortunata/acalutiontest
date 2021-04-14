import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ProductDetails(props) {
  const location = useLocation();
  //   console.log(location);

  let id = location.pathname.split("/")[2];

  const [wineDetails, setWineDetails] = useState({});

  const fetchWineDetails = () => {
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}`
      )
      .then((res) => setWineDetails(res.data.value));
  };

  fetchWineDetails();

  return (
    <div>
      <div>{wineDetails.name}</div>
    </div>
  );
}

export default ProductDetails;
