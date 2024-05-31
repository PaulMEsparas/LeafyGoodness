import { useState } from "react";

async function getCoordinates(location) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GEOCODING_API_KEY}`
    );
    const data = await response.json();

    const { results } = data;
    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    throw new Error("Error fetching coordinates:", error.message);
  }
}

export function useLocation() {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  async function fetchLocation(location) {
    try {
      const coords = await getCoordinates(location);
      setCoordinates(coords);
      setError(null);
    } catch (error) {
      setCoordinates(null);
      setError(error.message);
    }
  }

  return { coordinates, error, fetchLocation };
}
