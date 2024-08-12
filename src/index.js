import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CategoryFormContainer from "./pages/categories/categoryFormContainer";
import Content from "./pages/content";
import NotFound from "./pages/notFound";
import CreateHouseCategory from "./pages/categories/create-house-category";
import RoomList from "./pages/RoomList";
import BookedRoom from "./pages/BookedRoom";

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
                        element: <CategoryFormContainer />,
                    },
                    {
                        path: "roomList",
                        element: <RoomList/>,
                    },
                    {
                        path: "roomList/:id",
                        element: <BookedRoom/>,
                    },
                    {
                        path: "createCategory",
                        element: <CreateHouseCategory />,
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


