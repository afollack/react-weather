import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App shadow">
      <div className="container-fluid">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
