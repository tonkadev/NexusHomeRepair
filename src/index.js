import React from 'react';
import * as ReactDOM from "react-dom";
import About from './routes/About';
import Home from './routes/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <Home />, // Render Home component as the default component
  // },
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        index:  true,
        path: "Home/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
