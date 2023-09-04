import { useEffect } from "react";

import MainHome from "../components/product/semuaProduct/SemuaProduct";

const Home = () => {
  useEffect(() => {
    document.title = "Amanone";
  }, []);
  return <MainHome />;
};

export default Home;
