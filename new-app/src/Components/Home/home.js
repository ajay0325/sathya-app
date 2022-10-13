// import Banner from "../Banner/banner";
import Catogories from "../Catogories/catogories";
import TopDeals from "../TopDeals/topdeals";
import Slideshow from "../imageslider/slider";

function Home() {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Slideshow></Slideshow>
            <Catogories></Catogories>
            <TopDeals></TopDeals>
        </div>
    )
}

export default Home;