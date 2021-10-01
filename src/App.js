import "./styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:btnName" />
        <Home />
      </Routes>
    </Router>
  );
};

export default App;
