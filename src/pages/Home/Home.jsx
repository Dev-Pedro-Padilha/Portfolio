import { useEffect, useState } from "react";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { Outlet, useLocation } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`main-content${isSidebarOpen ? " sidebar-open" : ""}`}>        
        <div className="container-fluid">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;