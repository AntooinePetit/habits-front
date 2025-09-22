import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HabitsPage from "./pages/habits";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitsPage />} />
      </Routes>
    </Router>
  );
}
