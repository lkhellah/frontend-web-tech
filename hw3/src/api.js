import axios from "axios";

// List of South American countries
const SOUTH_AMERICA = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
];

export const getSouthAmericaCountries = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/region/americas"
    );
    // Filter only South American countries
    const southAmerica = response.data.filter((c) =>
      SOUTH_AMERICA.includes(c.name.common)
    );
    return southAmerica;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
