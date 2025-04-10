import "./App.css";
import BannerSwiper from "./components/bannerSwiper";
import Button from "./components/Button";
import Cities from "./components/Cities";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BannerSwiper/>
      <Filter/>
      <Cities/>
    </div>
  );
}

export default App;
