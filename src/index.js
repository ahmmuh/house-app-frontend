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
import HotelPage from "./pages/hotel/HotelPage";
import HotelRoomList from "./pages/hotel/HotelRoomList";
import CreateHotel from "./pages/hotel/createHotel";

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
                        path:'hotels',
                        element:<HotelPage />,
                        children: [
                            {
                                path:'create',
                                element:<CreateHotel />,
                            },
                            {
                                path: 'hotelRooms',
                                element: <HotelRoomList />
                            },
                            {
                                path:'room:/id',
                                element: <HotelRoomList />
                            }
                        ]
                    },
                    {
                        path: "create",
                        element: <CategoryFormContainer />,
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


