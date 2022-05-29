import { BrowserRouter } from 'react-router-dom';
import Router from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer';

export default function App() {
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