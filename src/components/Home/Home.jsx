import { useLoaderData } from "react-router-dom";
import Categories from "../categories/Categories";
import Header, {  } from "../header/header";
import { useState } from "react";




const Home = () => {
    const loadData = useLoaderData();
    const [storedData , setData] = useState("")
    // console.log(loadData)

    // const getRef = useContext(sendRef)
    // console.log(getRef)
    const getData = (Data)=>{
       setData(Data)
        

    }
//    console.log(storedData)
    return (
        <div>

           
            <Header prop ={getData}></Header>
           <Categories loadData ={loadData} storedData ={storedData} ></Categories>


           
           
            
        </div>
    );
};

export default Home;