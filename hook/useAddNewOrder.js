// const addNewOrder = async (orderData) => {
//   try {
//     const response = await fetch("http://your-backend-api.com/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Include any authentication headers if required
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to add new order");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error adding new order:", error);
//     throw error;
//   }
// };

import { useState } from "react";

const useAddNewOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNewOrder = async (orderData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://192.168.254.117:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any authentication headers if required
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add new order");
      }

      const data = await response.json();
      console.log("Order created successfully:", data);
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Error adding new order:", error);
      setError(error.message);
      setLoading(false);
      return null;
    }
  };

  return { addNewOrder, loading, error };
};

export default useAddNewOrder;
