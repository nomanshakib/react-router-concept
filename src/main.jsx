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
import Photos from './components/Photos/Photos.jsx';
import PhotoDetails from './components/PhotoDetails/PhotoDetails.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/comments",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element: <Comments></Comments>,
      },
      {
        path: "/comment/:commentId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
          ),
        element: <CommentDetails></CommentDetails>,
      },
      {
        path: "/photos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/photos"),
        element: <Photos></Photos>,
      },
      {
        path: "/photo/:photoId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
        element: <PhotoDetails></PhotoDetails>,
      },
      {
        path: '/users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
