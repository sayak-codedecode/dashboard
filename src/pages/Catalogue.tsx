import React, { useState } from "react";
import { Eye, Upload } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  sku: string;
  price: string;
  status: "In Stock" | "Out of Stock";
  createdAt: string;
  updatedAt: string;
}

const dummyProducts: Product[] = [
  {
    id: "CAKE10006",
    name: "Christmas Snowman Cupcakes",
    brand: "—",
    sku: "CUPCAKE46-P",
    price: "₹1099",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:25",
  },
  {
    id: "CAKE10007",
    name: "Frosted Peanut Butter Cupcakes 24",
    brand: "—",
    sku: "CUPCAKE136",
    price: "₹4449",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10008",
    name: "Sunshine Chocolate Cupcakes",
    brand: "—",
    sku: "CUPCAKE227-P",
    price: "₹999",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:25",
  },
  {
    id: "CAKE10009",
    name: "Christmas Caramel Cupcakes 24",
    brand: "—",
    sku: "CUPCAKE45",
    price: "₹4249",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10010",
    name: "Frosted Peanut Butter Cupcakes 12",
    brand: "—",
    sku: "CUPCAKE135",
    price: "₹2549",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10011",
    name: "Strawberry Merry Cupcakes 24",
    brand: "—",
    sku: "CUPCAKE226",
    price: "₹3299",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10012",
    name: "Christmas Snowman Cupcakes 12",
    brand: "—",
    sku: "CUPCAKE47",
    price: "₹2399",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10013",
    name: "Funny Christmas Cupcakes 6",
    brand: "—",
    sku: "CUPCAKE137",
    price: "₹1099",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10014",
    name: "Sunshine Chocolate Cupcakes 12",
    brand: "—",
    sku: "CUPCAKE228",
    price: "₹1799",
    status: "Out of Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
  {
    id: "CAKE10015",
    name: "Christmas Snowman Cupcakes 6",
    brand: "—",
    sku: "CUPCAKE46",
    price: "₹1099",
    status: "In Stock",
    createdAt: "16/12/2015, 17:48:38",
    updatedAt: "07/10/2025, 14:04:26",
  },
];

const ProductCatalogue: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = dummyProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Product Catalogue</h1>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition">
          <Upload size={16} />
          Upload Custom Attributes
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-5 border border-gray-200">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Product Name or Product ID"
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute left-3 top-2.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
          </svg>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Product ID</th>
              <th className="px-6 py-3 text-left font-semibold">Product Name</th>
              <th className="px-6 py-3 text-left font-semibold">Brand</th>
              <th className="px-6 py-3 text-left font-semibold">SKU</th>
              <th className="px-6 py-3 text-left font-semibold">Price</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
              <th className="px-6 py-3 text-left font-semibold">Created At</th>
              <th className="px-6 py-3 text-left font-semibold">Updated At</th>
              <th className="px-6 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, index) => (
              <tr
                key={p.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b border-gray-100 hover:bg-blue-50/40 transition`}
              >
                <td className="px-6 py-3 text-blue-600 font-medium hover:underline cursor-pointer">{p.id}</td>
                <td className="px-6 py-3 font-medium text-gray-800">{p.name}</td>
                <td className="px-6 py-3 text-gray-500">{p.brand}</td>
                <td className="px-6 py-3 text-gray-600">{p.sku}</td>
                <td className="px-6 py-3 text-gray-800">{p.price}</td>
                <td className="px-6 py-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-md border ${p.status === "In Stock"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-600">{p.createdAt}</td>
                <td className="px-6 py-3 text-gray-600">{p.updatedAt}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center items-center">
                    <Eye
                      size={18}
                      className="text-gray-400 cursor-pointer hover:text-gray-700 transition"
                    />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
        <p>
          1–10 of <span className="font-medium">408140</span> items
        </p>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded border text-gray-700 ${page === 1
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              {page}
            </button>
          ))}
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
            40814
          </button>

          <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600">
            <option>10 / page</option>
            <option>20 / page</option>
            <option>50 / page</option>
          </select>

          <div className="flex items-center gap-1">
            <span>Go to</span>
            <input
              type="number"
              className="w-14 border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <span>Page</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
