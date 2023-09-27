/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = ({ loadData, storedData }) => {
  const [displayData, setDisplay] = useState([]);

  // if ( storedData == "Health" ){
  //     setDisplay(filtereddata)

  // }
  // else{
  //     setDisplay(loadData)
  // }

  // console.log(storedData)
  useEffect(() => {
    const filtereddata = loadData.filter((data) => data.category == storedData);
    setDisplay(filtereddata);
  }, [storedData, loadData]);

  console.log(displayData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">



        {
            storedData == "Health" ?  displayData.map((data) => (
       
       
                <Category key={data.id} data={data}>
                       {" "}
                   </Category>
          ))   :

          storedData == "Education" ? displayData.map((data) => (
       
       
            <Category key={data.id} data={data}>
                   {" "}
               </Category>
      )) :

      storedData == "Clothing" ?  displayData.map((data) => (
       
       
        <Category key={data.id} data={data}>
               {" "}
           </Category>
  )) :

  storedData == "Food" ? displayData.map((data) => (
       
       
    <Category key={data.id} data={data}>
           {" "}
       </Category>
)) :


          loadData.map((data) => (
       
       
                             <Category key={data.id} data={data}>
                                    {" "}
                                </Category>
                       ))  

        }


      
    </div>
  );
};

export default Categories;
