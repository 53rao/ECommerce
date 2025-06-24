
import { Link } from 'react-router-dom';


function Navbar(params) {
    return(<>
       
      <div className={`bg-transparent  h-[8vh] w-screen flex font-Primary font-bold text-2xl items-center px-2 xs:px-5 place-content-between`}>
        <div className="brand flex items-center">
          <div className="logo h-10 w-10 rounded-full">
          <img src="Vectors/Logo.png" alt="" />
         </div>
         <div className="name text-3xl xs:text-3xl text-white">ShoeMe</div>
        </div>
        
        <ol className='hidden sm:flex text-2xl items-center text-white mr-15 ;'>
          <li><Link to="/" className='pr-5'>Home</Link></li>
        <li><Link to="/Shop" className='pr-5' >Shop</Link></li>
        <li><Link to="/Contact" className='pr-5'>Contact Us</Link></li>
        <li><Link to="/About" className='pr-5'>About Us</Link></li>
        </ol>

        
          <div className="logo w-auto  xs:hidden justify-center flex items-center h-full">
            <span className="text-6xl text-white mb-2">&#8801;</span>
          </div>
         <div className="logo h-10 w-7 hidden xs:flex ">
          <Link to="/Cart" className=''><img src="Vectors/Comp3.png" alt="" className=' object-fit '/></Link>
          
         </div>
        </div>
      
      
    </>);
}
export default Navbar