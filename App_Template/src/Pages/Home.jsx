import Navbar from "../Components/Navbar";
// import newshoeData from "../Data/New";
// import Card from "../Components/Card";
// import limitedEditionShoes from "../Data/Limited";
import Footer from "../Components/Footer";
function Home(){
    
    return(
    <>
    
    <div className="h-auto overflow-hidden
">
      <div className="HERO h-auto  lg:h-[95vh] w-screen bg-cgreen-500  place-content-between" >
      <Navbar bg={"cgreen-500"}/>
      <div className="holder flex justify-center h-4/5 w-full 2xl:h-3/4  ]"> 
        <img src="/Hero/ok1.png" alt=""  className="object-contain max-h-full max-w-full "/>
      </div>
      <div className="tholder flex place-content-between  px-1 sm:px-3 lg:px-5 pb-4 h-full ">
        
        <div className="one">
          <p className="text-white  font-Primary sm:text-lg md:text-2xl">A perfect blend of </p>
        <p className="text-white"><a className=" sm:text-2xl md:text-4xl font-bold ">Luxury</a> and <a className="sm:text-2xl font-extrabold md:text-4xl">Comfort</a></p>
        </div>
        <div className=" font-Primary text-white">
          <p className="mr-1 xxs:mr-0 md:text-2xl text-right ">Designed by</p>
        <p className=" font-bold md:text-4xl sm:text-2xl text-right">@KSI</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
    );
}
export default Home;