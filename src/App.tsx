import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import HomePage from "./pages/home";
import HomePageStatic from "./pages/home-static";

import SitemapPage from "./pages/sitemap";

import Loading from "./components/Loading";

import globalStyles from "./assets/styles/global";

function App() {
  return (
    <BrowserRouter>
      {globalStyles()}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:locale" element={<HomePage />} />

        <Route path="/static" element={<HomePageStatic />} />
        <Route path="/:locale/static" element={<HomePageStatic />} />

        <Route path="sitemap" element={<SitemapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}
