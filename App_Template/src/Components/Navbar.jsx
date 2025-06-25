
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen,setOpen]=useState(false);
  const navtoggle = () => {
     setOpen(!isOpen);
  };

    return(
    <>
       
      <div className={` bg-transparent py-3 px-3  xs:py-2  h-auto w-screen flex flex-wrap font-Primary font-bold text-2xl items-center xs:px-5 place-content-between`}>
        <div className="brand flex items-center">
          <div className="logo h-10 w-10 rounded-full">
            <img src="Vectors/Logo.png" alt="" />
          </div>
          <div className="name text-3xl xs:text-3xl text-white">ShoeMe</div>
        </div>

        <Menu/>
        
        <div className="logo w-auto  xs:hidden  flex flex-col  h-full">
          {!isOpen ? ( <div className="comp h-8 w-8"><img src="Vectors/Comp1.png " alt="" onClick={navtoggle} /></div>
          ) : (<a onClick={navtoggle} className="text-white h-8 w-8 text-4xl cursor-pointer">X</a>)}

        </div>
        <div className="logo h-10 w-7 hidden xs:flex ">
          <Link to="/Cart" className=''><img src="Vectors/Comp3.png" alt="" className=' object-fit '/></Link>
        </div>
        {isOpen ? (<div className="w-full"><Menu2 /></div>) : null}
         
      </div>
      
      
    </>);
}
export default Navbar
function Menu(){
  return(
    <ol className='hidden sm:flex text-2xl items-center text-white mr-15 ;'>
          <li><Link to="/" className='pr-5'>Home</Link></li>
        <li><Link to="/Shop" className='pr-5' >Shop</Link></li>
        <li><Link to="/Contact" className='pr-5'>Contact Us</Link></li>
        <li><Link to="/About" className='pr-5'>About Us</Link></li>
        </ol>
  );
}

function Menu2(){
  return(
    <ol className=' w-screen h-auto text-center text-white  py-3 px-0'>
        <li className='shadow-md py-3'><Link to="/" className='shadow-md'>Home</Link></li>
        <li className='shadow-md py-3'><Link to="/Shop" className='shadow-md' >Shop</Link></li>
        <li className='shadow-md py-3' ><Link to="/Contact" className='shadow-md'>Contact Us</Link></li>
        <li className='shadow-md py-3'><Link to="/About" >About Us</Link></li>
        </ol>
  );
}