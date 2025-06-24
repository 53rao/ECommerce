
import { Link } from 'react-router-dom';


function Navbar(params) {
    return(<>
        <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" className="text-blue-600">Home</Link>
      <Link to="/Shop" className="text-blue-600">Shop</Link>
      <Link to="/page2" className="text-blue-600">Page 2</Link>
    </nav>
    </>);
}
export default Navbar