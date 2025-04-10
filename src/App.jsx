import "./App.css";
import Announcements from "./components/Announcements";
import BannerSwiper from "./components/bannerSwiper";
import Button from "./components/Button";
import Cities from "./components/Cities";
import CitiesSwiper from "./components/citiesSlider";
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
      <CitiesSwiper/>
      <Announcements/>
    </div>
  );
}

export default App;
