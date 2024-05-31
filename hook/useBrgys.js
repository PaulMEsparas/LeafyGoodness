import { useState, useEffect } from "react";

const useBrgys = () => {
  const [brgys, setBarangays] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarangays = async () => {
      try {
        const response = await fetch("http://192.168.254.117:3000/api/brgys");

        if (!response.ok) {
          throw new Error("Failed to fetch barangays");
        }

        const data = await response.json();
        const names = data.map((item) => item.name);
        setBarangays(names);
      } catch (error) {
        console.error("Error fetching barangays:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBarangays();
  }, []);

  return { brgys, error, loading };
};

export default useBrgys;
