import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CreateHouse from "./pages/createHouse";
import Content from "./pages/content";
import NotFound from "./pages/notFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "create",
                        element: <CreateHouse />,
                    },
                    {
                        path: "content",
                        element: <Content />,
                    },

                    {
                        path: "*",
                        element: <NotFound />,
                    },
                ],
            },
        ],
    },
]);
root.render(
  <React.StrictMode>
         <RouterProvider router={router}>
         </RouterProvider>
  </React.StrictMode>
);


