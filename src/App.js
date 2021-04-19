import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductListing from "./Pages/ProductListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  let searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Navbar searchOnChange={searchOnChange} />
        <Switch>
          <Route path="/" exact>
            <ProductListing search={search} />
          </Route>
          <Route name="productdetails" path="/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
