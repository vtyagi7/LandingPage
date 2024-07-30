import Calltoaction from "@/components/Calltoaction";
import Customer from "@/components/Customer";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Founders from "@/components/Founders";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import PlayStoreInfo from "@/components/PlayStoreInfo";
import Register from "@/components/Register";
import Retailer from "@/components/Retailer";
import Login from "@/components/Login";
import AddProduct from "@/components/AddProduct";


export default function Home() {
  return (
    <>
    <Hero/>
    <PlayStoreInfo/>
    <Info/>
    <Retailer/>
    <Customer/>
    <AddProduct/>
    <Calltoaction/>
    <Founders/>
    <FAQ/>
    <Register/>
    <Feedback/>
    <Login/>


    </>
  );
}
