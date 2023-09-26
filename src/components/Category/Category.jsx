/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Category = ({ data }) => {
  // console.log(data);
  const nevigate = useNavigate()

  const handleClick = ()=> {
    nevigate(`/Details/${data.id}`)
  }
//   data.map (loadData => console.log(loadData))
const color = data.title== "good Health" ? `${data.title_color}` :  data.title== "Education future" ? `${data.title_color}` : data.title== "Clothing Item" ? `${data.title_color}` : data.title== "Food Product" ? `${data.title_color}`: 'black';
 const bgColor = data.title== "good Health" ? `${data.card_color}` :  data.title== "Education future" ? `${data.card_color}` : data.title== "Clothing Item" ? `${data.card_color}` : data.title== "Food Product" ? `${data.card_color}`: 'black';
 const btn_color = data.title== "good Health" ? `${data.btn_color}` :  data.title== "Education future" ? `${data.btn_color}` : data.title== "Clothing Item" ? `${data.btn_color}` : data.title== "Food Product" ? `${data.btn_color}`: 'black';
 return (
    <div onClick={handleClick} className="border-2 border-red-500 border-solid">
      <div style={{backgroundColor :bgColor}}  className=" relative flex  flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative  h-[180px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={data.image}
            className="h-full w-full object-cover"
          />

        </div>
        <div className="p-6">
        <div>
            <h2  className=" inline-block p-2 rounded-lg text-sm"   style={{color : color ,backgroundColor :btn_color}}
           
            
            >
                {data.category}
            </h2>
        </div>
        <div>
            <h2 style={{color : color}} className="mt-2 font-semibold" >{data?.title}</h2>
        </div>
         
        </div>
       
      </div>
    </div>
  );
};

export default Category;
