// import { useState } from 'react'
// import LoginBox from './components/LoginBox.jsx'
import { NavBar } from "./components/NavBar.jsx";
import "./App.css";
import MainHeader from "./components/MainHeader.jsx";
import TopBar from "./components/TopBar.jsx"

function App() {
  return (
    <div className="">
      <TopBar />
      <MainHeader />
      <NavBar />
    </div>
  );
}

export default App;
