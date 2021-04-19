import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ListCard from "../Components/ListCard/ListCard";
import "./ProductListing.css";
import Swal from "sweetalert2";

const ProductListing = (props) => {
  const [wineLists, setWineLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchWineLists = (page) => {
    // console.log(this.state.currentPage);

    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${page}`
      )
      .then((res) => {
        setWineLists((previousWineLists) => [
          ...new Set([...previousWineLists, ...res.data.value.products]),
        ]);
        // console.log(this.state.wineLists);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "something went wrong!",
        });
      });
  };

  useEffect(() => {
    fetchWineLists(currentPage);
  }, [currentPage]);

  let handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const search = props.search;
  const filteredWineLists = wineLists.filter((wineList) => {
    return wineList.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="listcards-container">
      {/* {console.log(this.state.wineLists)} */}
      <InfiniteScroll
        dataLength={wineLists.length}
        next={handleNext}
        hasMore={true}
        //   loader={<h4>Loading...</h4>}
      >
        {filteredWineLists.map((wineList) => (
          <ListCard
            key={wineList.id}
            id={wineList.id}
            image={wineList.image}
            name={wineList.name}
            vintageYear={wineList.vintageYear}
            grapeVarietes={wineList.grapeVarietes}
            region={wineList.region}
            country={wineList.country}
            price={wineList.price}
            qty={wineList.qty}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ProductListing;
