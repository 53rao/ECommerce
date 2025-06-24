import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function About(){
    return(
    <>
    <div className="main bg-blue-500">
        <Navbar bgm={"cgreen-500"}/>
    <p className="text-4xl">This is About Us Page</p>
    <Footer/>
    </div>
    </>
    );
}
export default About;