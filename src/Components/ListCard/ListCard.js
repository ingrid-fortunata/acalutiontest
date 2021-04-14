import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import "./ListCard.css";

function ListCard({
  image,
  name,
  vintageYear,
  grapeVarietes,
  region,
  country,
  price,
  qty,
  id,
}) {
  return (
    <div className="listcard-container">
      <img
        src={image}
        alt="wineimage"
        style={{ width: "150px", height: "300px" }}
      />
      <div className="listcard-container-rightside">
        <Link
          to={{ pathname: `/productdetails/${id}` }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="listcard-title">
            <h2>
              {name} {vintageYear > 0 ? vintageYear : null}
            </h2>
          </div>

          <div className="list-card-info">
            <p>{grapeVarietes}</p>
            <p>
              {region} {country}
            </p>
          </div>

          <div className="list-card-price">
            <h2>S$ {price}</h2>
            {qty <= 5 && qty > 0 ? <p>{qty} left</p> : null}
          </div>
        </Link>

        <Buttons name={name} qty={qty} />
      </div>
    </div>
  );
}

export default ListCard;
