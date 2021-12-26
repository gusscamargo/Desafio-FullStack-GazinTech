import {BrowserRouter as Router} from "react-router-dom"

import Header from "./components/Header";
import Content from "./components/Content";

function App(props) {
  return (
    <Router> 
      <Header />
      <Content />
    </Router>
  );
}

export default App;
