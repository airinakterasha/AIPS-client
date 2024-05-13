import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Queries from "../pages/Queries/Queries";
import RecommendForMe from "../pages/RecommendForMe/RecommendForMe";
import MyQueries from "../pages/MyQueries/MyQueries";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import PrivateRoute from "../routes/PrivateRoute"
import AddQueries from "../pages/MyQueries/AddQueries";
import SingleQuery from "../pages/MyQueries/SingleQuery";
import UpdateQuery from "../pages/MyQueries/UpdateQuery";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/queries",
          element: <Queries></Queries>,
          loader: () => fetch('https://apis-server.vercel.app/query')
        },
        {
          path: "/recommend-for-me",
          element: <PrivateRoute><RecommendForMe></RecommendForMe></PrivateRoute> 
        },
        // my queries start
        {
          path: "/my-queries",
          element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute> 
        },
        {
          path: "/add-queries",
          element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute> 
        },
        {
          path: "/add-queries/:id",
          element: <PrivateRoute><SingleQuery></SingleQuery></PrivateRoute>,
          loader: ({params}) => fetch(`https://apis-server.vercel.app/query/${params.id}`)
        },
        {
          path: "/update-queries/:id",
          element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>, 
          loader: ({params}) => fetch(`https://apis-server.vercel.app/query/${params.id}`)
        },
        // my queries end
        {
          path: "/my-recommendations",
          element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute> 
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
      ]
    },
]);


export default router