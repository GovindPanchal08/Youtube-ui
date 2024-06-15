import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LeftNav from "./Components/LeftNav";
import Feed from "./Components/Feed";
import LeftNavMenuitem from "./Components/LeftNavMenuItem";
import VideoCard from "./Components/VideoCard";
import VideoDetails from "./Components/VideoDetails";
import SearchVideoCard from "./Components/SearchVideoCard";
import SearchResult from "./Components/SearchResult";

import { Appcontext } from "./context/Context";

function App() {
  return (
    <Appcontext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />

            <Route path="/video/:id" element={<VideoCard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Appcontext>
  );
}
export default App;
