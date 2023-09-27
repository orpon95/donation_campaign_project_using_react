import { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  // console.log(id)
  const datas = useLoaderData();
  // console.log(datas)
  useEffect(() => {
    const findDetails = datas.find((data) => data.id == id);

    setDetails(findDetails);
    // console.log(details.title_color);
  }, [id, datas, details]);

  const color =
    details.title == "good Health"
      ? `${details.title_color}`
      : details.title == "Education future"
      ? `${details.title_color}`
      : details.title == "Clothing Item"
      ? `${details.title_color}`
      : details.title == "Food Product"
      ? `${details.title_color}`
      : "black";

  const handleAdd = () => {
    const addDonate = [];

    const getDonate = JSON.parse(localStorage.getItem("donate"));
    if (!getDonate) {
      addDonate.push(details);
      localStorage.setItem("donate", JSON.stringify(addDonate));
      swal("successfullly donated");
    } else {
      const exists = getDonate.find(
        (singleDonate) =>( singleDonate.id )== details.id
      );
      if (!exists) {
        addDonate.push(...getDonate, details);
        localStorage.setItem("donate", JSON.stringify(addDonate));
        swal("successfullly donated")
      }
      else(
        swal("already exists")
      )

      // alert("added")
    }
  };
  return (
    <div>
      <div className="relative flex w-full my-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative  h-max overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={details.image} className="w-full" alt="img-blur-shadow" />

          <div className="absolute bottom-0  bg-black py-6 px-8  bg-opacity-60 justify-start ali w-full flex">
            <button
              onClick={handleAdd}
              style={{ backgroundColor: color }}
              className="select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Donate ${details.price}
            </button>
          </div>
        </div>

        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {details.title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {details.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
