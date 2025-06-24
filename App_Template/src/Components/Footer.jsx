function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 justify-center h-auto font-Primary overflow-hidden">
      <div className="max-w-7xl  grid grid-cols-1 md:grid-cols-3 gap-8 ">

        
        <div className="flex-row justify-center text-center">
          <div className="w-full flex justify-center"><img src="Vectors/Logo.png" className="h-20 justify-center" alt="" /></div>
          <h2 className="text-2xl font-bold mb-4">ShoeMe</h2>
          <p className="text-gray-400 text-sm">
            Define Style
          </p>
          
        </div>

        
        

        
        <div className="flex-row items-baseline text-center">
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        
        <div className="flex-row items-center text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ShoeMe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
