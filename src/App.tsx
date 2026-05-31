import { Navigate, Route, Routes } from "react-router-dom";
import CodingArenaPage from "./pages/CodingArena/CodingArenaPage";
import LiveTestPage from "./pages/LiveTest/LiveTestPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import PracticeTestsPage from "./pages/PracticeTests/PracticeTestsPage";
import ResultsPage from "./pages/Results/ResultsPage";
import TestInstructionsPage from "./pages/TestInstructions/TestInstructionsPage";
import TestSelectionPage from "./pages/TestSelection/TestSelectionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/practice-tests" replace />} />
      <Route path="/practice-tests" element={<PracticeTestsPage />} />
      <Route path="/practice-tests/selection" element={<TestSelectionPage />} />
      <Route path="/practice-tests/instructions" element={<TestInstructionsPage />} />
      <Route path="/practice-tests/live" element={<LiveTestPage />} />
      <Route path="/practice-tests/results" element={<ResultsPage />} />
      <Route path="/coding-practice" element={<CodingArenaPage />} />
      <Route
        path="/dashboard"
        element={<PlaceholderPage title="Dashboard" description="Your dashboard route is connected and ready for KPI widgets." />}
      />
      <Route
        path="/company-simulation"
        element={<PlaceholderPage title="Company Simulation" />}
      />
      <Route path="/ai-interview" element={<PlaceholderPage title="AI Interview" />} />
      <Route path="/contests" element={<PlaceholderPage title="Contests" />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
      <Route path="*" element={<Navigate to="/practice-tests" replace />} />
    </Routes>
  );
}

export default App;
