import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
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
  useEffect(() => {
    console.log(data.vans);
  }, []);
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans vans={data.vans} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
