
import { Pencil, Trash2, Eye } from "lucide-react";
import type { Category } from "../types";

type CategoryTableProps = {
  categories: Category[];
};

export default function CategoryTable({ categories }: CategoryTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          {/* Table Head */}
          <thead className="bg-linear-to-r from-blue-50 to-indigo-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Category ID</th>
              <th className="px-6 py-4 text-left font-semibold">Category URL</th>
              <th className="px-6 py-4 text-left font-semibold">Category Name</th>
              <th className="px-6 py-4 text-left font-semibold">Base Category</th>
              <th className="px-6 py-4 text-left font-semibold">Status</th>
              <th className="px-6 py-4 text-left font-semibold">Created At</th>
              <th className="px-6 py-4 text-left font-semibold">Created By</th>
              <th className="px-6 py-4 text-left font-semibold">Updated At</th>
              <th className="px-6 py-4 text-left font-semibold">Updated By</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category.id}
                className={`transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50/40`}
              >
                {/* Category ID */}
                <td className="px-6 py-4 font-medium text-blue-700 cursor-pointer hover:underline">
                  {category.id}
                </td>

                {/* Category URL */}
                <td className="px-6 py-4 text-gray-500 truncate max-w-[260px]">
                  <a
                    href={category.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 hover:underline transition"
                  >
                    {category.url}
                  </a>
                </td>

                {/* Category Name */}
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {category.name}
                </td>

                {/* Base Category */}
                <td className="px-6 py-4 text-gray-700">{category.baseCategory}</td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm ${category.status === "Enabled"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {category.status}
                  </span>
                </td>

                {/* Created At */}
                <td className="px-6 py-4 text-gray-700">{category.createdAt}</td>

                {/* Created By */}
                <td className="px-6 py-4 text-gray-400">—</td>

                {/* Updated At */}
                <td className="px-6 py-4 text-gray-700">{category.updatedAt}</td>

                {/* Updated By */}
                <td className="px-6 py-4 text-gray-400">—</td>

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

            {/* Empty State */}
            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="py-10 text-center text-gray-400 text-sm"
                >
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  );
}