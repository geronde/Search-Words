import React from "react";

import Header from "./Elements/Header";
import Main from "./Main";
import Footer from "./Elements/Footer";

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default Home;
