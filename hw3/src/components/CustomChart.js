import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getSouthAmericaCountries } from "../api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function CustomChart() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSouthAmericaCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  const chartData = {
    labels: countries.map((c) => c.name.common),
    datasets: [
      {
        label: "Area (km²)",
        data: countries.map((c) => c.area),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
          "#FF6666",
          "#66FF66",
          "#6699FF",
          "#FFCC99",
          "#99CCFF",
          "#FF99CC",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Area of South American Countries",
      },
    },
  };

  return (
    <div
      className="page-container"
      style={{
        padding: "1rem",
        margin: "1rem auto",
        maxWidth: "800px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h2>Custom Chart - Country Area</h2>
      {countries.length > 0 ? (
        <Pie data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
