import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getSouthAmericaCountries } from "../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Population() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSouthAmericaCountries(); // fetches data from REST Countries API
      setCountries(data);
    }
    fetchData();
  }, []);

  const chartData = {
    labels: countries.map((c) => c.name.common),
    datasets: [
      {
        label: "Population",
        data: countries.map((c) => c.population),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population of South American Countries",
      },
    },
  };

  return (
    <div className="page-container">
      <h2>Population Chart</h2>
      <div className="chart-container">
        {countries.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
