import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Watchlist from "./pages/Watchlist/Watchlist";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;