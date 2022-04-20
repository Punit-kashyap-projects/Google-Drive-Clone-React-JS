import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import DisplayContainer from "./components/DisplayContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="mainCont">
        <SideBar />
        <DisplayContainer />
      </div>
    </>
  );
}

export default App;
