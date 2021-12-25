import {BrowserRouter as Router} from "react-router-dom"

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App(props) {
  return (
    <Router> 
      <Header />
      <Content />
    </Router>
  );
}

export default App;
