import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductListing from "./Pages/ProductListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <ProductListing />
          </Route>
          <Route name="productdetails" path="/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
