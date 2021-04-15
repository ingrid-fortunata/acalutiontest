import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Buttons from "../Components/Buttons/Buttons";
import "./ProductDetails.css";

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

  // fetchWineDetails();

  useEffect(() => {
    fetchWineDetails();
  }, []);

  return (
    <div>
      <div className="productdetails-container">
        <div className="breadcrumbs">
          Home &#9658; Products &#9658; {wineDetails.grapeVarieties} &#9658;{" "}
          {wineDetails.country}{" "}
        </div>

        <div className="productdetails-body">
          <div style={{ display: "inline-block" }}>
            <img src={wineDetails.image} alt="winedetails" />
          </div>

          <div className="productdetails-rightside">
            <div className="productdetails-title">{wineDetails.name}</div>

            <div className="productdetails-text">
              {wineDetails.grapeVarieties}{" "}
              {wineDetails.vintageYear === 0
                ? "Non Vintage"
                : wineDetails.vintageYear}
            </div>

            <div className="productdetails-buy">
              <div className="productdetails-text">
                S$ {wineDetails.price}{" "}
                {wineDetails.qty <= 5 && wineDetails.qty > 0 ? (
                  <span>{wineDetails.qty} left</span>
                ) : null}
              </div>
              <Buttons name={wineDetails.name} qty={wineDetails.qty} />
            </div>

            <table className="productdetails-table">
              <tr className="productdetails-table-title">
                <td>Region</td>
                <td>Producer</td>
                <td>Bottle</td>
                <td>Alcohol</td>
              </tr>
              <tr className="productdetails-table-info">
                <td>
                  {wineDetails.country} - {wineDetails.region}
                </td>
                <td>{wineDetails.producer}</td>
                <td>{wineDetails.bottleSize}mL</td>
                <td>{wineDetails.alcohol}%</td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td colSpan="4" className="productdetails-table-title">
                  Description
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="productdetails-table-info">
                  {wineDetails.description}
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td colSpan="4" className="productdetails-table-title">
                  Tasting Notes
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="productdetails-table-info">
                  {wineDetails.tastingNotes}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
