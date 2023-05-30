import "../index.css";
import Products from "../components/product";

function Home(){
    return(
        <>
        <h2 className="heading"> Welcome to our shop </h2>
        < Products/>
        </>
    )
}

export default Home;