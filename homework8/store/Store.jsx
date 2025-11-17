"use client";
import { useEffect, useState } from "react";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    load();
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "6px" }}
      />

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.image} width="60" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
