import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside/Aside";
import Main from "@/components/main/Main";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=" dark:bg-primary/10 print:bg-white">
        <Header />
        <div className="container grid grid-cols-4 mx-auto lg:grid-cols-12">
          <Aside />
          <Main />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
