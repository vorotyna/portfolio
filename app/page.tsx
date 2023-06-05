import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import RootLayout from "./layout";

// This file puts all the components together, which forms the web application

export default function Page() {
  return (
    <RootLayout>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </RootLayout>
  );
}
