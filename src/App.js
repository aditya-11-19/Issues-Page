import react from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Upper from "./Components/Upper";

function App() {
  return (
    <div>
      <Navbar/>
      <Upper/>
      <Main />
    </div>
  );
}

export default App;
