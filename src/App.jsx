import Homeview from "./components/Homeview";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

export default function App() {
  return(
    <div>
      <Navbar/>
        <main>
          <Homeview/>
        </main>
      <Footer/>
    </div>
  )
}