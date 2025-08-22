import React, { useEffect, useState } from "react";

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <p>Rating: {product.rating.rate} ⭐</p>
    </div>
  );
};

export default ProductDetails;
