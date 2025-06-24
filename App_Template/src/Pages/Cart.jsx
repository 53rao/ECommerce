import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Cart(){
    return(
    <>
    <Navbar bg={"cgreen-500"}/>
    <p className="text-4xl">Your Cart is Empty</p>
    <Footer/>
    </>
    );
}
export default Cart;