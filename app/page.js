import NewArrivals from "../components/NewArrivals";
import FirstOne from "../components/FirstOne";
import Header from "../components/Header";
import TopSelling from "../components/TopSelling";
import OurCustomers from "../components/OurCustomers";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div>
      <Header />
      <div className='' >
        <FirstOne />
        <NewArrivals />
        <TopSelling />
        <OurCustomers />
        <AboutUs />
      </div>
    </div >
  );
}
