import Header from "@/app/features/header/header";
import Main from "@/app/components/main/main";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";
import FindStore from "./components/FindStore/FindStore";
import Autumn from "./components/autumn/Autumn";
import MiddleCards from "./components/middlecards/MiddleCards";
import Featured from "./components/featured/Featured";
import CustomReview from "./components/CustomReview/CustomReview";
import ReadJournal from "./components/ReadJournal/ReadJournal";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./features/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Categories />
      <Collection />
      <FindStore />
      <Autumn />
      <MiddleCards />
      <Featured />
      <CustomReview />
      <ReadJournal />
      <Subscribe />
      <Footer />
    </>
  );
}
