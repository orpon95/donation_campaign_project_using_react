import { useEffect, useState } from "react";
import DonateCard from "../DonateCard/DonateCard";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [nodonate, setNoDonate] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getDonate = JSON.parse(localStorage.getItem("donate"));
    if (getDonate) {
      setDonates(getDonate);
    } else {
      setNoDonate("No Donation");
    }
  }, []);
  console.log(donates);
  const btn_hidden = show   ? "none" : "block";
  return (
    <div>
      {nodonate ? (
        <p className="flex justify-center items-center text-5xl text-red-600 font-bold h-[70vh]">
          {nodonate}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-7">
            {show
              ? donates.map((donate) => (
                  <DonateCard key={donate.id} donate={donate}></DonateCard>
                ))
              : donates
                  .slice(0, 4)
                  .map((donate) => (
                    <DonateCard key={donate.id} donate={donate}></DonateCard>
                  ))}
          </div>
          <div className="flex justify-center">
            <button
              style={{ display: btn_hidden }}
              onClick={() => setShow(!show)}
              className="btn-secondary px-3 py-2 rounded-lg text-center"
            >
              {" "}
              see more
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
