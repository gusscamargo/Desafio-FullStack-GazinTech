import Header from "./components/Header/Header";

function App(props) {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default App;
