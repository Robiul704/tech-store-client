import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Brandsname from "./Brandsname";
import Tech from "./Tech";
import Last from "./Last";


const Home = () => {
    const brands=useLoaderData()
    console.log(brands)
    return (
        <div className="mx-auto container">

        
          

            <Banner></Banner>
            <div>
            <h1 className="text-6xl font-bold text-center my-10 underline">Click the card to view our products</h1>
            <div className="grid gap-10 grid-cols-3 my-10">
            {
                brands.map(brandd=><Brandsname key={brandd.id} brandd={brandd}></Brandsname>)
            }
           </div>
            </div>
            <Tech></Tech>
            <Last></Last>
        </div>
    );
};

export default Home;