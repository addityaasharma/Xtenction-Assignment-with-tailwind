import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="mt-4">
        <ul>
          <li className="mb-2"><Link to="/" className="hover:text-gray-300">Customer Management</Link></li>
          <li><Link to="/stats" className="hover:text-gray-300">Customer Stats</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
