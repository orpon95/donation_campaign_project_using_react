/* eslint-disable react/prop-types */

import Category from "../Category/Category";


const Categories = ({loadData}) => {
    // console.log(loadData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                loadData.map(data =><Category key={data.id} data={data}> </Category>)
            }
        </div>
    );
};

export default Categories;