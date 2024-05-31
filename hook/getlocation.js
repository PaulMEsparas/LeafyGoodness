async function getCoordinates(barangay) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${barangay}&key=${process.env.GEOCODING_API_KEY}`
    );
    const data = await response.json();

    const { results } = data;
    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    } else {
      console.log("Location not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
