// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState('');
//   const [search, setSearch] = useState('');

//   const fetchProducts = async () => {
//     const res = await axios.get(`/api/products`, {
//       params: { category, search }
//     });
//     setProducts(res.data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [category, search]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
      
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="border px-3 py-2 rounded"
//         />

//         <select value={category} onChange={e => setCategory(e.target.value)} className="border px-3 py-2 rounded">
//           <option value="">All Categories</option>
//           <option value="electronics">Electronics</option>
//           <option value="clothing">Clothing</option>
//           <option value="books">Books</option>
          
//         </select>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map(p => (
//           <div key={p._id} className="border p-4 rounded shadow">
//             <img src={p.image} alt={p.name} className="h-32 w-full object-cover mb-2" />
//             <h2 className="text-lg font-semibold">{p.name}</h2>
//             <p className="text-sm">{p.category}</p>
//             <p className="font-bold">${p.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
