import React, { useState } from "react";
import {
  FlaskConical,
  FileText,
  Search,
  Grid,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

interface SubItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  subItems?: SubItem[];
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [openMenus, setOpenMenus] = useState<string[]>(["Merchandising"]);
  const location = useLocation();

  const menu: MenuItem[] = [
    {
      label: "Merchandising",
      icon: <img src="market.png" alt="merchandising" className="size-4" />,
      subItems: [
        { label: "Categories", icon: <FileText size={16} />, path: "/categories" },
        { label: "Search", icon: <Search size={16} />, path: "/search" },
        { label: "Catalogue", icon: <Grid size={16} />, path: "/catalogue" },
      ],
    },
    {
      label: "Experiments",
      icon: <FlaskConical size={18} />,
      subItems: [
        { label: "Campaigns", icon: <img src="rocket.png" className="size-4" />, path: "/campaigns" },
        { label: "Segments", icon: <img src="segments.png" className="size-4" />, path: "/segments" },
      ],
    },
    {
      label: "Profile",
      icon: <img src="info.png" alt="profile" className="size-4" />,
      subItems: [
        { label: "User Profiles", icon: <img src="user_profile.png" className="size-3" />, path: "/user-profiles" },
        { label: "Prod. Profiles", icon: <img src="shop.png" className="size-3" />, path: "/product-profiles" },
      ],
    },
  ];

  const toggleOpenMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-56"} 
        bg-white border-r border-gray-200 shadow-sm 
        flex flex-col justify-between 
        transition-all duration-300 ease-in-out 
        ${className} relative z-50
      `}
    >
      <div className="flex-1">
        <nav className="text-sm p-3 space-y-2 overflow-visible">
          {menu.map((item) => {
            const isMenuOpen = openMenus.includes(item.label);

            return (
              <div key={item.label} className="relative group">
                {/* Main Menu Button */}
                <button
                  onClick={() => !collapsed && toggleOpenMenu(item.label)}
                  className={`
                    w-full flex items-center 
                    ${collapsed ? "justify-center" : "justify-between"} 
                    px-3 py-2 rounded-lg text-gray-800 
                    transition-colors duration-200
                    ${!collapsed && isMenuOpen ? "bg-gray-100" : "hover:bg-gray-100"}
                  `}
                >
                  <div
                    className={`flex items-center ${collapsed ? "w-full justify-center" : "gap-2"}`}
                  >
                    <span className="text-gray-700">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed && item.subItems && (
                    <ChevronDown
                      size={16}
                      className={`text-gray-500 transform transition-transform duration-300 ${isMenuOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  )}
                </button>

                {/* 🌟 Collapsed Mode Hover Floating Submenu */}
                {collapsed && item.subItems && (
                  <div
                    className={`
      absolute left-full top-2 ml-3 
      w-52 bg-white border border-gray-200 rounded-xl shadow-xl
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-300 ease-in-out
      transform scale-95 group-hover:scale-100
      z-50
    `}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                      <span className="text-blue-600">{item.icon}</span>
                      <span className="font-semibold text-gray-700 text-sm">
                        {item.label}
                      </span>
                    </div>

                    <div className="p-2 space-y-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 
            transition-all duration-200
            ${location.pathname === sub.path
                              ? "bg-green-100 text-blue-700 font-semibold"
                              : "hover:bg-gray-100"
                            }
          `}
                        >
                          <span>{sub.icon}</span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}


                {/* Expanded Mode Menu */}
                {!collapsed && item.subItems && (
                  <div
                    className={`
                      pl-8 bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out
                      ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className={`
                          flex items-center gap-2 px-3 py-2 text-gray-600 
                          hover:bg-gray-100 rounded-lg transition-all duration-200
                          ${location.pathname === sub.path
                            ? "bg-green-100 text-blue-700 font-semibold"
                            : ""
                          }
                        `}
                      >
                        <span>{sub.icon}</span>
                        <span>{sub.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Collapse Button */}
      <div className="border-t border-gray-100 p-3">
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center gap-2 py-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}
