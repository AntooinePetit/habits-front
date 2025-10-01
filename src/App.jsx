import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Today from "./pages/Today";
import HabitsPage from "./pages/Habits";

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
