import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside/Aside";
import Main from "@/components/main/Main";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <div className="container grid grid-cols-12 mx-auto">
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
