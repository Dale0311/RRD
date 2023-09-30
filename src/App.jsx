import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";
// components
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostVansLayout, {
  loader as hostVansLayoutLoader,
} from "./components/HostVansLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Error from "./pages/Error";
import Login, {loader as loginLoader} from "./pages/Login";

// vans section
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail";

// host section
import Dashboard from "./pages/host/Dashboard";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
// host vans
import Details from "./pages/host/hostvans/Details";
import Photo from "./pages/host/hostvans/Photo";
import Pricing from "./pages/host/hostvans/Pricing";

// server
import "../db/mirageJs";
// react hooks
import { useState, useEffect } from "react";

// utils
import requireAuth from "./utils/requireAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="login" element={<Login />} loader={loginLoader}/>
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />
        {/* protect this routes */}
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => requireAuth()}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => requireAuth()}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVansLayout />}
            loader={hostVansLayoutLoader}
          >
            <Route
              index
              element={<Details loader={async () => requireAuth()} />}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async () => requireAuth()}
            />
            <Route
              path="photo"
              element={<Photo />}
              loader={async () => requireAuth()}
            />
          </Route>
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => requireAuth()}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;
