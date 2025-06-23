// src/Components/Card.jsx
function Card({ shoe }) {
  return (
   <>
   <img src={shoe.image} alt="" />
   <p>{shoe.name}</p>
   
   </>
  );
}

export default Card;
