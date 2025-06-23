import Navbar from "../Components/navbar";
import newshoeData from "../Data/New";
import Card from "../Components/Card";
function Home(){
    
    return(
    <>
    <Navbar/>
    {newshoeData.map((sh, index) => (
  <Card key={index} shoe={sh} />
))}
    
    
    </>
    );
}
export default Home;