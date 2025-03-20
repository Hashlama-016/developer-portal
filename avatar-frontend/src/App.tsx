import { Routes, Route, Link } from "react-router-dom";
import Services from "@/pages/Services";
import Orders from "@/pages/Orders/Orders";
import "@/style/App.css";

function App() {
  return (
    <div className="app">
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
