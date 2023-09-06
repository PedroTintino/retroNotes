import "../components/App.css";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <AnimatedRoutes />
      <h1>Avaible Archvies</h1>
      <div className="mainContent">
        <Link to={"/ruleofrose"}>
          <Card
            tittle="Rule of Rose"
            backgroundImage="https://e.snmc.io/lk/lv/x/03a28e83c6089b7e05d5c9a721a30e90/7586126"
          />
        </Link>
        <Link to={"/projectzero"}>
          <Card
            tittle="Fatal Frame II: Crimson Butterfly"
            backgroundImage="https://4.bp.blogspot.com/-XncxgpxOZps/Thejh_YT3HI/AAAAAAAAAx0/e42DoMqQBNc/w1200-h630-p-k-no-nu/915022_front.jpg"
          />
        </Link>
        <Card
          tittle="Coming Soon"
          backgroundImage="https://images.unsplash.com/photo-1530840197133-665af68f9d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        />
        <Card
          tittle="Coming Soon"
          backgroundImage="https://images.unsplash.com/photo-1530840197133-665af68f9d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        />
        <Card
          tittle="Coming soon"
          backgroundImage="https://images.unsplash.com/photo-1530840197133-665af68f9d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        />
        <Card
          tittle="Coming soon"
          backgroundImage="https://images.unsplash.com/photo-1530840197133-665af68f9d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        />
      </div>
    </motion.div>
  );
}

export default App;
