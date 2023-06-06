import "./App.css";
import Navbar from "./shared/Navbar";
import Banner from "./components/Banner";
import HomeAuth from "./components/HomeAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[80%] mx-auto">
        <Banner></Banner>
        <HomeAuth></HomeAuth>
      </div>
    </div>
  );
}

export default App;
