import { useRoutes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Error from './components/Error';
import { useEffect } from 'react';
import { hideLoader } from './components/Loader';

function App() {
  useEffect(hideLoader)
  return useRoutes([{
    path: "/",
    index: true,
    element: <Home />
  }, {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "more",
        element: (<h1>More from Home</h1>)
      },
      {
        path: "end",
        index: true,
        element: (<h1>End of the Home</h1>)
      }
    ]
  }, {
    path: "about",
    element: <About />,
  }, {
    path: "products",
    element: <Products />,
  }, {
    path: "*",
    element: <Error />,
  }])
}

export default App;