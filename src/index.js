import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HotelRoomDetail from "./pages/hotel/HotelRoomDetail";
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = lazy(() => import('./App'));

const Dashboard = lazy(() => import("./pages/dashboard"));
const  CategoryFormContainer = lazy(() => import("./pages/categories/categoryFormContainer"));
const Content  = lazy(() => import("./pages/content")) ;
const NotFound = lazy(() => import('./pages/notFound'));  ;
const CreateHouseCategory  = lazy(() =>
    import("./pages/categories/create-house-category"));
const HotelPage = lazy(() => import("./pages/hotel/HotelPage.jsx"));
const HotelRoomList = lazy(() => import("./pages/hotel/HotelRoomList"));
const CreateHotel = lazy(() => import("./pages/hotel/createHotel")) ;
const renderLoader = () => <p>Loading</p>;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <Suspense fallback={renderLoader()}>
                    <Dashboard />
                </Suspense>,
                children: [
                    {
                        path:'hotels',
                        element:<Suspense fallback={renderLoader()}>
                            <HotelPage />
                        </Suspense>,
                        children: [
                            {
                                path:'create',
                                element:<Suspense fallback={renderLoader()}>
                                    <CreateHotel />
                                </Suspense>,
                            },
                            {
                                path: 'hotelRooms',
                                element:<Suspense fallback={renderLoader()}>
                                    <HotelRoomList />
                                </Suspense>
                            },
                            {
                                path:'room/:id',
                                element: <Suspense fallback={renderLoader()}>
                                    <HotelRoomDetail />
                                </Suspense>
                            }
                        ]
                    },
                    {
                        path: "create",
                        element: <Suspense fallback={renderLoader()}><CategoryFormContainer /></Suspense>,
                    },

                    {
                        path: "createCategory",
                        element: <Suspense fallback={renderLoader()}>
                            <CreateHouseCategory />
                        </Suspense>,
                    },
                    {
                        path: "content",
                        element: <Suspense fallback={renderLoader()}>
                            <Content />
                        </Suspense>,
                    },

                    {
                        path: "*",
                        element: <Suspense fallback={renderLoader()}>
                            <NotFound />
                        </Suspense>,
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


