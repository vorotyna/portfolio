import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import RootLayout from "./layout";

// This is the main page with all of the rendered components put together

export default function Page() {
  return (
    <RootLayout>
      <Navbar />
      <Home />
    </RootLayout>
  );
}
