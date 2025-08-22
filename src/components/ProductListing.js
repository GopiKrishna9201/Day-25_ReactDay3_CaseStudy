import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const url =
          category === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${category}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);


  if (loading) return <h2>Loading...</h2>;


  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;


  return (
    <div>
      <h2>Products</h2>


      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>


      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "20px", 
        marginTop: "20px" 
      }}>
        {products.map((p) => (
          <div 
            key={p.id} 
            style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
          >
            <img src={p.image} alt={p.title} width="100" height="100" />
            <h4>{p.title}</h4>
            <p><strong>${p.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
