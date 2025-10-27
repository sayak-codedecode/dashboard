import { useState } from "react";
import { Search, Eye, Pencil, Trash2, Plus } from "lucide-react";

interface SearchCampaign {
  id: string;
  name: string;
  geo: string;
  keywords: string[];
  url: string;
  fromDate: string;
  createdAt: string;
}

const campaigns: SearchCampaign[] = [
  {
    id: "1",
    name: "Test Campaign",
    geo: "AUSTRALIA",
    keywords: ["new"],
    url: "https://devtron.fnp.com/dashboard/resources",
    fromDate: "2025-10-30 00:00:00",
    createdAt: "2025-10-26 10:10:45",
  },
  {
    id: "2",
    name: "Diwali Qatar",
    geo: "QATAR",
    keywords: ["deepavali gifts", "diwali hampers", "diwali +20 more"],
    url: "https://www.fnp.com/qatar/gifts/diwali",
    fromDate: "2025-09-16 18:30:00",
    createdAt: "2025-09-17 05:13:47",
  },
  {
    id: "3",
    name: "Bhai Dooj Indonesia",
    geo: "INDONESIA",
    keywords: ["bhai dooj", "chocolates", "dry fruits +16 more"],
    url: "https://www.fnp.com/indonesia/gifts/bhai-dooj",
    fromDate: "2025-09-16 18:30:00",
    createdAt: "2025-09-17 05:17:56",
  },
  {
    id: "4",
    name: "Valentine Singapore",
    geo: "SINGAPORE",
    keywords: ["valentine flowers", "chocolates", "teddy bear", "couple gifts"],
    url: "https://www.fnp.sg/valentine-gifts",
    fromDate: "2025-02-01 00:00:00",
    createdAt: "2025-01-15 11:10:22",
  },
  {
    id: "5",
    name: "Christmas UAE",
    geo: "UAE",
    keywords: ["xmas gifts", "cakes", "chocolates", "decorations"],
    url: "https://www.fnp.ae/christmas",
    fromDate: "2025-12-10 00:00:00",
    createdAt: "2025-11-22 09:45:30",
  },
  {
    id: "6",
    name: "Mother’s Day India",
    geo: "INDIA",
    keywords: ["mothers day flowers", "gifts", "jewelry", "cakes"],
    url: "https://www.fnp.com/mothers-day-gifts",
    fromDate: "2025-05-01 00:00:00",
    createdAt: "2025-04-10 08:30:45",
  },
  {
    id: "7",
    name: "Eid Malaysia",
    geo: "MALAYSIA",
    keywords: ["eid hampers", "gourmet baskets", "sweets", "dry fruits"],
    url: "https://www.fnp.my/eid-gifts",
    fromDate: "2025-04-05 00:00:00",
    createdAt: "2025-03-15 10:20:00",
  },
  {
    id: "8",
    name: "New Year USA",
    geo: "USA",
    keywords: ["new year cakes", "champagne", "party gifts", "decor"],
    url: "https://www.fnp.com/usa/new-year",
    fromDate: "2025-12-31 00:00:00",
    createdAt: "2025-12-10 12:10:10",
  },
  {
    id: "9",
    name: "Thanksgiving Canada",
    geo: "CANADA",
    keywords: ["turkey gifts", "fall decor", "thanksgiving baskets"],
    url: "https://www.fnp.ca/thanksgiving",
    fromDate: "2025-11-20 00:00:00",
    createdAt: "2025-10-30 09:45:45",
  },
  {
    id: "10",
    name: "Raksha Bandhan UK",
    geo: "UNITED KINGDOM",
    keywords: ["rakhi", "brother gifts", "sweets", "personalized items"],
    url: "https://www.fnp.co.uk/rakhi",
    fromDate: "2025-08-01 00:00:00",
    createdAt: "2025-07-10 07:20:22",
  },
  {
    id: "11",
    name: "Father’s Day Philippines",
    geo: "PHILIPPINES",
    keywords: ["fathers day", "watch", "wallet", "bouquet"],
    url: "https://www.fnp.ph/fathers-day-gifts",
    fromDate: "2025-06-10 00:00:00",
    createdAt: "2025-05-15 08:55:12",
  },
  {
    id: "12",
    name: "Women’s Day Global",
    geo: "GLOBAL",
    keywords: ["women empowerment", "flowers", "gift baskets"],
    url: "https://www.fnp.com/womens-day",
    fromDate: "2025-03-08 00:00:00",
    createdAt: "2025-02-20 10:00:00",
  },
  {
    id: "13",
    name: "Anniversary Gifts UAE",
    geo: "UAE",
    keywords: ["anniversary", "roses", "cakes", "personalized gifts"],
    url: "https://www.fnp.ae/anniversary-gifts",
    fromDate: "2025-02-14 00:00:00",
    createdAt: "2025-02-01 14:30:00",
  },
  {
    id: "14",
    name: "Halloween Germany",
    geo: "GERMANY",
    keywords: ["halloween", "pumpkin", "chocolates", "costumes"],
    url: "https://www.fnp.de/halloween",
    fromDate: "2025-10-01 00:00:00",
    createdAt: "2025-09-12 16:45:00",
  },
  {
    id: "15",
    name: "Karwa Chauth India",
    geo: "INDIA",
    keywords: ["karwa chauth", "sargi", "thali", "fast gifts"],
    url: "https://www.fnp.com/karwa-chauth",
    fromDate: "2025-10-09 00:00:00",
    createdAt: "2025-09-20 08:30:00",
  },
  {
    id: "16",
    name: "Christmas Australia",
    geo: "AUSTRALIA",
    keywords: ["xmas tree", "ornaments", "cake", "wine"],
    url: "https://www.fnp.com.au/christmas",
    fromDate: "2025-12-01 00:00:00",
    createdAt: "2025-11-20 09:20:00",
  },
  {
    id: "17",
    name: "Valentine Canada",
    geo: "CANADA",
    keywords: ["valentine gifts", "roses", "chocolates", "couple hampers"],
    url: "https://www.fnp.ca/valentine-gifts",
    fromDate: "2025-02-01 00:00:00",
    createdAt: "2025-01-10 10:15:00",
  },
  {
    id: "18",
    name: "Birthday Gifts Singapore",
    geo: "SINGAPORE",
    keywords: ["birthday cakes", "surprise box", "gifts", "balloons"],
    url: "https://www.fnp.sg/birthday-gifts",
    fromDate: "2025-07-01 00:00:00",
    createdAt: "2025-06-15 12:10:00",
  },
  {
    id: "19",
    name: "Easter USA",
    geo: "USA",
    keywords: ["easter", "eggs", "bunny", "gifts"],
    url: "https://www.fnp.com/usa/easter",
    fromDate: "2025-04-15 00:00:00",
    createdAt: "2025-03-30 09:45:00",
  },
  {
    id: "20",
    name: "Friendship Day India",
    geo: "INDIA",
    keywords: ["friendship bands", "flowers", "gifts"],
    url: "https://www.fnp.com/friendship-day-gifts",
    fromDate: "2025-08-02 00:00:00",
    createdAt: "2025-07-10 13:30:00",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = campaigns.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.geo.toLowerCase().includes(query.toLowerCase()) ||
      c.keywords.join(" ").toLowerCase().includes(query.toLowerCase()) ||
      c.url.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f9fafc] p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[20px] font-semibold text-gray-800">Search Redirection</h1>
        <button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm px-4 py-2 rounded-md transition">
          <Plus size={16} /> CREATE
        </button>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by Campaign Name, Keywords or URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-1/3 pl-10 pr-4 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <table className="min-w-full text-sm text-gray-700">
          {/* Table Head */}
          <thead className="bg-linear-to-r from-blue-50 to-indigo-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Campaign Name</th>
              <th className="px-6 py-4 text-left font-semibold">Geo</th>
              <th className="px-6 py-4 text-left font-semibold">Keywords</th>
              <th className="px-6 py-4 text-left font-semibold">URL</th>
              <th className="px-6 py-4 text-left font-semibold">From Date & Time</th>
              <th className="px-6 py-4 text-left font-semibold">Created Date & Time</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filtered.map((c, index) => (
              <tr
                key={c.id}
                className={`transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50/40`}
              >
                {/* Campaign Name */}
                <td className="px-6 py-4 font-medium text-blue-700 cursor-pointer hover:underline">
                  {c.name}
                </td>

                {/* Geo */}
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {c.geo}
                  </span>
                </td>

                {/* Keywords */}
                <td className="px-6 py-4 text-gray-600">
                  {c.keywords.slice(0, 2).join(", ")}{" "}
                  {c.keywords.length > 2 && (
                    <span className="text-blue-600 text-xs font-medium cursor-pointer">
                      +{c.keywords.length - 2} more
                    </span>
                  )}
                </td>

                {/* URL */}
                <td className="px-6 py-4 text-gray-500 truncate max-w-[260px]">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 hover:underline transition"
                  >
                    {c.url}
                  </a>
                </td>

                {/* From Date */}
                <td className="px-6 py-4 text-gray-700">{c.fromDate}</td>

                {/* Created Date */}
                <td className="px-6 py-4 text-gray-700">{c.createdAt}</td>

                {/* Actions */}
                <td className="px-3 py-3 whitespace-nowrap text-center space-x-2">
                  <button title="View URL" className="text-gray-600 hover:text-gray-400">
                    <Eye size={16} />
                  </button>
                  <button title="Edit" className="text-blue-500 hover:text-indigo-700">
                    <Pencil size={16} />
                  </button>
                  <button title="Delete" className="text-red-600 hover:text-red-400">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="py-10 text-center text-gray-400 text-sm">
                  No matching campaigns found 
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
