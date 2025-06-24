import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Cart(){
    return(
    <>
    <div className="main bg-red-500">
        <Navbar bgm={"cgreen-500"}/>
    <p className="text-4xl">Your Cart is Empty</p>
    <Footer/>
    </div>
    </>
    );
}
export default Cart;