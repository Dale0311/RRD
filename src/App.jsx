import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "../db/mirageJs";
// custom hooks
// server
import useAxios from "./hooks/useAxios";
function App() {
  const { data, loading } = useAxios("/api/vans");
  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans vans={data}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
