import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx' */
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Comments from './components/Comments/Comments.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Home/Contact/Contact.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/comments",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Comments></Comments>,
      },
      {
        path: "/comment/:commentId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails></CommentDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);