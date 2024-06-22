import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
