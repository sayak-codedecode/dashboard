import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/TopBar";
import CategoryManagement from "./pages/CategoryManagement";
import Search from "./pages/SearchPage.tsx";
import Catalogue from "./pages/Catalogue";
import Campaigns from "./pages/Campaigns.tsx";
import Segments from "./pages/Segments.tsx";
import UserProfiles from "./pages/UserProfiles.tsx";
import ProductProfiles from "./pages/ProductProfiles.tsx";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-50">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto border-l border-gray-200">
            <Routes>
              <Route path="/categories" element={<CategoryManagement />} />
              <Route path="/search" element={<Search />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/user-profiles" element={<UserProfiles />} />
              <Route path="/product-profiles" element={<ProductProfiles />} />
              <Route path="*" element={<CategoryManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
