import Navbar from "./components/Navbar/Navbar";
import RootLayout from "./layout";

// This is the main page with all of the rendered components put together

export default function Page() {
  return (
    <RootLayout>
      <Navbar />
      <div className="mx-5">HII</div>
    </RootLayout>
  );
}
