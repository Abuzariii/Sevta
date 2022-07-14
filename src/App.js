import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
