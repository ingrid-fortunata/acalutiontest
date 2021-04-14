import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ListCard from "../Components/ListCard/ListCard";
import "./ProductListing.css";

export default class ProductListing extends Component {
  state = {
    wineLists: [],
    count: 1,
    currentPage: 1,
  };

  componentDidMount() {
    const { currentPage } = this.state;
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
      )
      .then((res) => this.setState({ wineLists: res.data.value.products }));
  }

  fetchWineLists = () => {
    const { count, currentPage } = this.state;
    this.setState({ currentPage: this.state.currentPage + count });
    axios
      .get(
        `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
      )
      .then((res) =>
        this.setState({
          wineLists: this.state.wineLists.concat(res.data.value.products),
        })
      );
  };

  render() {
    return (
      <div className="listcards-container">
        {/* {console.log(this.state.wineLists)} */}
        <InfiniteScroll
          dataLength={this.state.wineLists.length}
          next={this.fetchWineLists}
          hasMore={true}
          //   loader={<h4>Loading...</h4>}
        >
          {this.state.wineLists.map((wineList) => (
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
  }
}
