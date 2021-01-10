import "./App.scss";
import axios from "axios";
import Gallery from "./components/Gallery";
import Summary from "./components/Summary";
function App() {
  //Usually done in a seperate file if the config is robust.
  axios.defaults.baseURL = "https://dog.ceo/api/";

  return (
    <div className="App">
      <Summary />
      <Gallery />
    </div>
  );
}

export default App;
