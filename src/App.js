import { BrowserRouter } from 'react-router-dom';
import Router from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer';
import { useEffect } from 'react';
import { showLoader, hideLoader } from "./components/Loader";

export default function App() {
  // useEffect(hideLoader)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}