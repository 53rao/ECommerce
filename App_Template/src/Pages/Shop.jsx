import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Vintage from "../Data/Vintage";
// import Trend from "../Data/Trend";
// import React from 'react';
import Card2 from "../Components/Card2";
import newshoeData from "../Data/New";
import vintageshoes from "../Data/Vintage";
// const sections = [
//   { title: "Vintage Collection", Component: Vintage },
//   { title: "Trending Now", Component: Trend },
// ];
function Shop(){
    
    return(
    <>
    <div className="Main flex-row justify-center mx-auto font-Primary bg-gray-950">
        <Navbar bgm={"corange-500"}/>
        <div className="section bg-transparent pb-3">
            <p className="text-4xl text-white p-4">New Collections</p>
            <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            
            {newshoeData.map((shoe, idx) => (
            <Card2 key={shoe.productNumber || idx} shoe={shoe} />
            ))}
        </div>
        </div>
        <div className="section bg-cgreen-500">
            <p className="text-4xl text-white p-4">Vintage Collections</p>
            <div className="CardHolder px-auto flex flex-wrap w-full justify-center xxs:place-content-between px-10">
            
            {vintageshoes.map((shoe, idx) => (
            <Card2 key={shoe.productNumber || idx} shoe={shoe} />
            ))}
        </div>
        </div>
        
        
        <Footer/>
    </div>
    
    
    
   
    </>
    );
}
export default Shop;