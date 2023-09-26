import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Layout from "./components/Layout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
