
import { Pencil, Trash2, Eye } from "lucide-react";
import type { Category } from "../types";

type CategoryTableProps = {
  categories: Category[];
};

export default function CategoryTable({ categories }: CategoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {/* Table Headers matching the screenshot */}
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category ID
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category URL
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category Name
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Base Category
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created By
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Updated At
            </th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Updated By
            </th>
            <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.map((category) => (
            <tr key={category.id}>
              {/* Category ID - Made clickable like in the screenshot */}
              <td className="px-3 py-3 whitespace-nowrap text-blue-600 hover:underline cursor-pointer">
                {category.id}
              </td>
              
              {/* Category URL */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-700">
                {category.url}
              </td>
              
              {/* Category Name */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">
                {category.name}
              </td>
              
              {/* Base Category */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-700">
                {category.baseCategory}
              </td>
              
              {/* Status - Styled with the green pill */}
              <td className="px-3 py-3 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${category.status === 'Enabled' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'}`
                  }>
                  {category.status}
                </span>
              </td>

              {/* Created At */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-700">
                {category.createdAt}
              </td>

              {/* Created By - Blank in your data, represented by an em-dash in the screenshot */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-400">
                —
              </td>

              {/* Updated At */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-700">
                {category.updatedAt}
              </td>

              {/* Updated By - Blank in your data, represented by an em-dash in the screenshot */}
              <td className="px-3 py-3 whitespace-nowrap text-gray-400">
                —
              </td>

              {/* Actions - Icons for View, Edit, Delete */}
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
        </tbody>
      </table>
    </div>
  );
}