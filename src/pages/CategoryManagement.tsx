
import { useState } from "react";
import { Plus } from "lucide-react";
import CategoryTable from "../components/Table"; 
import type { Category } from "../types"; 

export default function CategoryManagement() { 
  const [query, setQuery] = useState<string>("");

   const categories: Category[] = [
  {
    id: "35391692408",
    url: "fnp.com/roses/10th-birthday-lp",
    name: "Date range category",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "24/10/2025, 11:53:31",
    updatedAt: "24/10/2025, 13:14:01",
  },
  {
    id: "35391692405",
    url: "fnp.com/roses-12-lp",
    name: "Roses 12",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "24/10/2025, 10:05:55",
    updatedAt: "24/10/2025, 10:05:55",
  },
  {
    id: "35391692404",
    url: "fnp.com/100-flowers-stems-cust-lp",
    name: "Custom attrib category",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "24/10/2025, 08:28:52",
    updatedAt: "24/10/2025, 08:28:52",
  },
  {
    id: "35391692403",
    url: "fnp.com/roses-11-lp",
    name: "Test flower",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "23/10/2025, 19:24:31",
    updatedAt: "23/10/2025, 19:28:17",
  },
  {
    id: "35391692402",
    url: "fnp.com/roses-10-lp",
    name: "Test flowers",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "23/10/2025, 18:54:14",
    updatedAt: "23/10/2025, 19:23:08",
  },
  {
    id: "35391692401",
    url: "fnp.com/roses-rich-lp",
    name: "Roses Luxury",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "23/10/2025, 18:34:14",
    updatedAt: "23/10/2025, 18:45:41",
  },
  {
    id: "35391692409",
    url: "fnp.com/chocolates-premium-lp",
    name: "Premium Chocolates",
    baseCategory: "Confectionery",
    status: "Enabled",
    createdAt: "23/10/2025, 14:10:21",
    updatedAt: "23/10/2025, 14:15:09",
  },
  {
    id: "35391692410",
    url: "fnp.com/valentine-flowers-lp",
    name: "Valentine Flowers",
    baseCategory: "Seasonal",
    status: "Enabled",
    createdAt: "22/10/2025, 12:01:42",
    updatedAt: "22/10/2025, 13:02:10",
  },
  {
    id: "35391692411",
    url: "fnp.com/birthday-gifts-lp",
    name: "Birthday Gifts",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "21/10/2025, 10:45:09",
    updatedAt: "21/10/2025, 11:00:18",
  },
  {
    id: "35391692412",
    url: "fnp.com/anniversary-gifts-lp",
    name: "Anniversary Gifts",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "21/10/2025, 09:30:00",
    updatedAt: "21/10/2025, 10:00:00",
  },
  {
    id: "35391692413",
    url: "fnp.com/valentine-chocolates-lp",
    name: "Valentine Chocolates",
    baseCategory: "Seasonal",
    status: "Disabled",
    createdAt: "20/10/2025, 17:10:00",
    updatedAt: "20/10/2025, 18:05:22",
  },
  {
    id: "35391692414",
    url: "fnp.com/fresh-flowers-lp",
    name: "Fresh Flowers",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "19/10/2025, 15:42:11",
    updatedAt: "19/10/2025, 16:01:05",
  },
  {
    id: "35391692415",
    url: "fnp.com/cakes-lp",
    name: "Cakes",
    baseCategory: "Confectionery",
    status: "Enabled",
    createdAt: "18/10/2025, 11:25:10",
    updatedAt: "18/10/2025, 11:40:40",
  },
  {
    id: "35391692416",
    url: "fnp.com/personalized-gifts-lp",
    name: "Personalized Gifts",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "18/10/2025, 09:15:50",
    updatedAt: "18/10/2025, 09:45:00",
  },
  {
    id: "35391692417",
    url: "fnp.com/home-decor-lp",
    name: "Home Decor",
    baseCategory: "Lifestyle",
    status: "Disabled",
    createdAt: "17/10/2025, 13:33:41",
    updatedAt: "17/10/2025, 14:01:05",
  },
  {
    id: "35391692418",
    url: "fnp.com/plants-lp",
    name: "Plants",
    baseCategory: "Nature",
    status: "Enabled",
    createdAt: "17/10/2025, 10:22:09",
    updatedAt: "17/10/2025, 10:22:09",
  },
  {
    id: "35391692419",
    url: "fnp.com/gourmet-hampers-lp",
    name: "Gourmet Hampers",
    baseCategory: "Confectionery",
    status: "Enabled",
    createdAt: "16/10/2025, 19:11:42",
    updatedAt: "16/10/2025, 19:35:00",
  },
  {
    id: "35391692420",
    url: "fnp.com/spa-gift-sets-lp",
    name: "Spa Gift Sets",
    baseCategory: "Lifestyle",
    status: "Enabled",
    createdAt: "16/10/2025, 18:02:00",
    updatedAt: "16/10/2025, 18:12:00",
  },
  {
    id: "35391692421",
    url: "fnp.com/toys-kids-lp",
    name: "Toys for Kids",
    baseCategory: "Kids",
    status: "Enabled",
    createdAt: "15/10/2025, 17:00:00",
    updatedAt: "15/10/2025, 17:00:00",
  },
  {
    id: "35391692422",
    url: "fnp.com/handmade-crafts-lp",
    name: "Handmade Crafts",
    baseCategory: "Lifestyle",
    status: "Enabled",
    createdAt: "14/10/2025, 10:00:00",
    updatedAt: "14/10/2025, 10:15:00",
  },
  {
    id: "35391692423",
    url: "fnp.com/office-supplies-lp",
    name: "Office Supplies",
    baseCategory: "Corporate",
    status: "Disabled",
    createdAt: "13/10/2025, 09:00:00",
    updatedAt: "13/10/2025, 09:15:00",
  },
  {
    id: "35391692424",
    url: "fnp.com/greeting-cards-lp",
    name: "Greeting Cards",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "12/10/2025, 12:20:00",
    updatedAt: "12/10/2025, 12:25:00",
  },
  {
    id: "35391692425",
    url: "fnp.com/premium-combos-lp",
    name: "Premium Combos",
    baseCategory: "Root",
    status: "Enabled",
    createdAt: "11/10/2025, 14:50:00",
    updatedAt: "11/10/2025, 15:00:00",
  },
  {
    id: "35391692426",
    url: "fnp.com/seasonal-decor-lp",
    name: "Seasonal Decor",
    baseCategory: "Lifestyle",
    status: "Enabled",
    createdAt: "10/10/2025, 11:00:00",
    updatedAt: "10/10/2025, 11:10:00",
  },
  {
    id: "35391692427",
    url: "fnp.com/digital-gifts-lp",
    name: "Digital Gifts",
    baseCategory: "Technology",
    status: "Enabled",
    createdAt: "09/10/2025, 08:00:00",
    updatedAt: "09/10/2025, 08:15:00",
  },
];

  const filtered = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.id.includes(query) ||
      c.url.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Category Management</h1>
        <button className="flex items-center gap-2 bg-[#007bff] text-white text-sm px-4 py-2 rounded-md shadow-sm hover:bg-[#0069d9] active:bg-[#005cbf] transition">
          <Plus size={16} />
          NEW CATEGORY
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="Search by Category Name, ID or URL"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-2xl rounded-md p-2 text-sm mb-4 border border-gray-300"
        />
        
        <CategoryTable categories={filtered} />
      </div>
    </div>
  );
}