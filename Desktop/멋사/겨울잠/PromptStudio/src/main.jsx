import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Hub from "./features/Main/Hub/Hub.jsx";
import Archive from "./features/Main/Archive/Archive.jsx";
import Maker from "./features/Main/Maker/Maker.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hub />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
      {
        path: "maker",
        element: <Maker />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
