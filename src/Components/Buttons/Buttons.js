import React, { useState } from "react";
import "./Buttons.css";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import Swal from "sweetalert2";

function Buttons({ name, qty }) {
  const addToCartOnClick = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${name} is added to cart`,
      showConfirmButton: true,
      timer: 1500,
    });
  };

  const [bookmarkIcon, setbookmarkIcon] = useState(FaRegBookmark);

  const addBookmarks = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${name} is bookmarked`,
      showConfirmButton: true,
      timer: 1500,
    });

    setbookmarkIcon(FaBookmark);
  };

  return (
    <div className="list-card-buttons">
      {qty === 0 ? (
        <button
          //   className="button-add"
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "5% 8%",
            border: "none",
            borderRadius: "5px",
            boxShadow: "2px 5px black",
            outline: "none",
          }}
          disabled="disabled"
          onClick={addToCartOnClick}
        >
          ADD TO CART
        </button>
      ) : (
        <button className="button-add" onClick={addToCartOnClick}>
          ADD TO CART
        </button>
      )}
      {/* <button className="button-add" onClick={addToCartOnClick}>
        ADD TO CART
      </button> */}
      {/* <FaRegBookmark onClick={addBookmarks} /> */}
      <button className="button-bookmark" onClick={addBookmarks}>
        {bookmarkIcon}
      </button>
    </div>
  );
}

export default Buttons;
