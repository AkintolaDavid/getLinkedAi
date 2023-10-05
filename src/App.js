import { Route,Routes } from "react-router-dom";
import { Fragment } from "react";
import Header from "./component/Header/Header";
import LandingPage from "./component/LandingPage/LandingPage";
import Introduction from "./component/Introduction/Introduction";
import Rules from "./component/Rules/Rules";
import Criteria from "./component/Criteria/Critaria";
import Questions from "./component/Questions/Questions";
import Timeline from "./component/Timeline/Timeline";
import Prize from "./component/Prize/Prize";
import Sponsor from "./component/Sponsor/Sponsor";
import Policy from "./component/Policy/Policy";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <Fragment>
      <Header />
<LandingPage/>
      <Introduction />
      <Rules />
      <Criteria />
      <Questions />
      <Timeline />
      <Prize />
      <Sponsor />
      <Policy />
      <Footer />
    </Fragment>
  );
};

export default App;

