import { useEffect, useState } from "react";
import { getSouthAmericaCountries } from "../api";

export default function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSouthAmericaCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <h2>Countries of South America</h2>
      {countries.map((country) => (
        <div
          key={country.cca3}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            gap: "1rem",
          }}
        >
          <img
            src={country.flags?.png}
            alt={`${country.name.common} flag`}
            style={{ width: "50px", height: "30px" }}
          />
          <div>
            <div>{country.name.common}</div>
            <small style={{ color: "#6c757d" }}>
              {country.capital ? country.capital[0] : "No capital"}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
