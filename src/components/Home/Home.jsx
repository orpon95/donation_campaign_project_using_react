import { useLoaderData } from "react-router-dom";
import Categories from "../categories/Categories";
import Header from "../header/header";



const Home = () => {
    const loadData = useLoaderData();
    // console.log(loadData)
    return (
        <div>
            <Header></Header>
           <Categories loadData ={loadData} ></Categories>
            
        </div>
    );
};

export default Home;