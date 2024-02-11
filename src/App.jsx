import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactMe from "./pages/ContactMe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "tween",
        duration: 0.08,
      },
    },
    hover: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "var(--color-secondary)",
      mixBlendMode: "plus-lighter",
      transition: {
        type: "tween",
        duration: 0.08,
      },
    },
    small: {
      height: 40,
      width: 40,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "color",
      transition: {
        type: "tween",
        duration: 0.08,
      },
    },
    btnHover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "var(--color-secondary)",
      mixBlendMode: "screen",
      transition: {
        type: "tween",
        duration: 0.08,
      },
    },
  };

  return (
    <main>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>

      <Navbar setCursorVariant={setCursorVariant} />
      <HeroPage setCursorVariant={setCursorVariant} />
      <AboutMePage setCursorVariant={setCursorVariant} />
      <ServicesPage setCursorVariant={setCursorVariant} />
      <ProjectsPage setCursorVariant={setCursorVariant} />
      <ContactMe setCursorVariant={setCursorVariant} />
      <ToastContainer />
    </main>
  );
}

export default App;
