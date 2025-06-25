import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Card2 from "../Components/Card2";
import newshoeData from "../Data/New";
import vintageshoes from "../Data/Vintage";
import { useState, useEffect } from "react";
import Modal from "../Components/Modal";
function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className="Main flex-row justify-center mx-auto font-Primary bg-gray-950">
        <Navbar bgm={"corange-500"} />
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

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <img src="Hero/ok2.jpg" alt="" className="h-1/2" />
          <div className="caption flex items-center text-center h-1/2 w-40  text-gray-600 text-xl">
            "Oil up your game.🔥 The drop hits June 27. Don’t come dry."
          </div>
        </Modal>

        <Footer />
      </div>
    </>
  );
}
export default Shop;
