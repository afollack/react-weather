import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
