import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/content/Profile/Profile";
import Dialogs from "./components/content/Dialogs/Dialogs";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<span>Home page</span>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
