import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/orders/Orders";
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
