import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
// components
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostVansLayout from "./components/HostVansLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Error from "./pages/Error";

// vans section
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";

// host section
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";
// host vans
import Details from "./pages/host/hostvans/Details";
import Photo from "./pages/host/hostvans/Photo";
import Pricing from "./pages/host/hostvans/Pricing";

// server
import "../db/mirageJs";
// react hooks
import { useState, useEffect } from "react";

// custom hooks
import useAxios from "./hooks/useAxios";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansLayout />}>
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photo" element={<Photo />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
