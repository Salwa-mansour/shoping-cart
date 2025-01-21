import { useState, useEffect } from "react";

const useProductData = (id) => {
  const [ProductData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductData(response))
      .catch((error) =>{ setError(error)})
      .finally(() => setLoading(false));
  }, []);

  return { ProductData, error, loading };
};

export {
    useProductData
}