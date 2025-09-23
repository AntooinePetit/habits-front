import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HabitsPage from "./pages/habits";
import Today from "./pages/Today";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitsPage />} />
        <Route path="/today" element={<Today />}></Route>
      </Routes>
    </Router>
  );
}
