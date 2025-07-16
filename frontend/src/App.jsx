import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "../src/assets/main.scss";
import Header from "./components/Header";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
