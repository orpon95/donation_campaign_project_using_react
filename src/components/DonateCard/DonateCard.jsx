/* eslint-disable react/prop-types */
const DonateCard = ({donate}) => {
    const {id,image,title,category,description,price,title_color,card_color,btn_color} = donate

    const color =title== "good Health" ? `${title_color}` : title== "Education future" ? `${title_color}` : title== "Clothing Item" ? `${title_color}` : title== "Food Product" ? `${title_color}`: 'black';
    const bgColor =title== "good Health" ? `${card_color}` : title== "Education future" ? `${card_color}` : title== "Clothing Item" ? `${card_color}` : title== "Food Product" ? `${card_color}`: 'black';
    const btns_color = title== "good Health" ? `${btn_color}` :  title== "Education future" ? `${btn_color}` : title== "Clothing Item" ? `${btn_color}` : title== "Food Product" ? `${btn_color}`: 'black';
    return (
    <div >
      <div style={{backgroundColor :bgColor}} className=" flex gap-4 items-center  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" h-max overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="w-[200px] h-[150px]"
            src={image}
            alt="img-blur-shadow"
            
          />
        </div>
        <div className="p-2">
          <h5 style={{color : color ,backgroundColor :btns_color}}  className=" inline-block p-2 rounded-lg text-sm">{category}</h5>
          <p style={{color : color}} className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {title}
          </p>
          <p style={{color : color}}>${price}</p>
          <button style={{backgroundColor : color}}  className="text-white py-2 px-3 rounded-lg my-2"> View details</button>
        </div>
        
      </div>
        
    </div>
  );
};

export default DonateCard;
