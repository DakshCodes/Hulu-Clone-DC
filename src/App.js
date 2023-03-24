import Header from "../src/Components/Header";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import '../src/style/app.css';
import '../src/style/header.css';
import '../src/style/navbar.css';
import '../src/style/movies.css';
import '../src/style/videocard.css';
import { useState } from "react";

function App() {
const [selectedOption,setSelectedOption] = useState('');

  return (
    <div className="app">
    <Header />
    <NavBar setSelectedOption={setSelectedOption} />
    <Movies selectedOption={selectedOption} />
    </div>
  );
}

export default App;
