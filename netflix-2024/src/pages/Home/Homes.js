import React from "react";
import Header from "../../componenet/Header/Header";
import Footer from "../../componenet/Footer/Footer";
import Banner from "../../componenet/Banner/Banner";
import RowList from "../../componenet/Row/Rowlist/RowList";

const Home = () => {
  return (
    <>
       <Header />
          <Banner />   
         <RowList />    
      <Footer />  
    </>
  );
};

export default Home;
