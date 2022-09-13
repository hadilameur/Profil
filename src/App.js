import "./App.css";
import Adress from "./Profile/Adress";
import FullName from "./Profile/FullName";
import ProfilPhoto from "./Profile/ProfilPhoto";

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
