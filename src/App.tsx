import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside/AsideLayout";
import Main from "@/components/main/MainLayout";
import TrackingPixel from "./components/TrackingPixel";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {window.location.pathname === "/track" && <TrackingPixel />}
      <div className=" dark:bg-primary/10 print:bg-white print:text-black print:w-full">
        <Header />
        <div className="container grid grid-cols-4 mx-auto lg:grid-cols-12 print:flex ">
          <Aside />
          <Main />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
