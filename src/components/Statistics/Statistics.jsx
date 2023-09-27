import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Statistics = () => {
  const loadChartData = useLoaderData();
  const [storageData, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("donate");
    if (!localData) {


      console.log("no data in ls");
    } else {
        const parseLocalData = JSON.parse(localStorage.getItem("donate"))
      setData(parseLocalData);
    }

    
  }, []);

  const storageDataLength = storageData?.length;

  const loadDataLength = loadChartData?.length;
  console.log(storageDataLength);

  const percentageOfStorageData = (100 * storageDataLength) / loadDataLength;
  const percentageOfLoadData = 100 - percentageOfStorageData;
  // console.log(percentageOfLoadData , percentageOfStorageData)

  // console.log(storageDataLength , loadDataLength)

  const data = {
    datasets: [
      {
        data: [`${percentageOfStorageData}`, `${percentageOfLoadData}`],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    labels: ["Your donation", "Total left donation"],
  };

  return <div className=" w-[50%] md:w-[30%]    text-center mx-auto my-auto">{!storageData ? <p>no dddata</p> : <Pie data={data}></Pie>}</div>;
};

export default Statistics;
