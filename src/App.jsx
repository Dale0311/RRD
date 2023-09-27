import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

// vans section
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";

// host section
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";

// server
import "../db/mirageJs";
// react hooks
import { useState, useEffect } from "react";

// custom hooks
import useAxios from "./hooks/useAxios";

function App() {
  const { data, loading } = useAxios("/api/vans");
  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans vans={data?.vans} />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
